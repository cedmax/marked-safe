import React, { Component } from 'react'
import Cropper from 'react-cropper'
import autobinder from 'autobind-decorator'

@autobinder
export default class myCropper extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.image !== nextProps.image
  }

  render () {
    if (this.props.image) {
      return (<Cropper
        viewMode={1}
        style={{height: this.props.size, width: this.props.size, overflow: 'hidden'}}
        ref={(cropper) => this.cropper = cropper}
        src={this.props.image}
        aspectRatio={1}
      />)
    } else {
      return <div />
    }
  }

  getImage () {
    return this.cropper.getCroppedCanvas().toDataURL()
  }
};
