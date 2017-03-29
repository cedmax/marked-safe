import React, { Component } from 'react'
import Cropper from 'react-cropper'
import autobinder from 'autobind-decorator'

function throttle (func, delay = 42) {
  let waiting = false
  let funcTimeoutId
  return function () {
    if (!waiting) {
      waiting = true
      clearTimeout(funcTimeoutId)
      funcTimeoutId = setTimeout(() => {
        waiting = false
        func.call()
      }, delay)
    }
  }
}

@autobinder
export default class myCropper extends Component {
  shouldComponentUpdate (nextProps) {
    console.log(this.props.image !== nextProps.image)

    return this.props.image !== nextProps.image
  }

  render () {
    if (this.props.image) {
      return (<Cropper
        style={{height: 200, width: 200}}
        ref={(cropper) => this.cropper = cropper}
        src={this.props.image}
        aspectRatio={1}
        crop={throttle(this.props.crop)}
      />)
    } else {
      return <div />
    }
  }

  getImage () {
    return this.cropper.getCroppedCanvas().toDataURL()
  }
};
