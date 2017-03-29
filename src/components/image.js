import React, { Component } from 'react'
import autobinder from 'autobind-decorator'
import Dropzone from 'react-dropzone'
import Cropper from 'components/cropper'

@autobinder
export default class Images extends Component {
  constructor (props) {
    super(props)

    this.state = {
      image: null,
      imageCropped: null
    }
  }

  render () {
    let cropper
    if (this.state.image) {
      cropper = (
        <Cropper
          ref={(cropper) => this.cropper = cropper}
          image={this.state.image}
          crop={this.crop}
        />
      )
    }

    let finalImage
    if (this.state.imageCropped) {
      finalImage = (
        <div>
          <img width="200" height="200" src={this.state.imageCropped} />
          <button onClick={() => this.props.onSave(this.state.imageCropped)}>save</button>
        </div>
      )
    }

    return (
      <div style={{display: 'flex'}}>
        <div>
          <Dropzone accept="image/*" onDrop={this.onDrop}>
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
        </div>

        <div>
          {cropper}
        </div>
        <div>
          {finalImage}
        </div>
      </div>
    )
  }

  onDrop (acceptedFiles) {
    this.setState({
      image: URL.createObjectURL(acceptedFiles[0])
    })
  }

  crop () {
    this.setState({
      imageCropped: this.cropper.getImage()
    })
  }
};
