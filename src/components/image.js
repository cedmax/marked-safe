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
          size={this.props.size}
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
          <img style={{border: '1px solid #ddd'}} width={this.props.size} height={this.props.size} src={this.state.imageCropped} /><br />
          <center style={{marginTop: '10px'}}><button onClick={() => this.props.onSave(this.state.imageCropped)}>Place the image</button></center>
        </div>
      )
    }

    const dropzoneStyle = {
      width: this.props.size,
      height: this.props.size,
      borderWidth: '2px',
      borderColor: 'rgb(102, 102, 102)',
      borderStyle: 'dashed',
      borderRadius: '5px',
      padding: '10px'
    }

    return (
      <div>
        <div style={{float: 'left', 'margin': '3px'}}>
          <Dropzone style={dropzoneStyle} accept="image/*" onDrop={this.onDrop}>
            <div><img src="assets/upload.svg" width="50%" style={{display: 'block', margin: 'auto', paddingTop: '25%', opacity: '.8'}} /></div>
          </Dropzone>
        </div>

        <div style={{float: 'left', 'margin': '3px'}}>
          {cropper}
        </div>
        <div style={{float: 'left', 'margin': '3px'}}>
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
