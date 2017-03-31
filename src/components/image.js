import React, { Component } from 'react'
import autobinder from 'autobind-decorator'
import Dropzone from 'react-dropzone'
import Cropper from 'components/cropper'

@autobinder
export default class Images extends Component {
  constructor (props) {
    super(props)

    this.state = {
      image: null
    }
  }

  render () {
    let cropper
    if (this.state.image) {
      cropper = (
        <div>
          <Cropper
            size={this.props.size}
            ref={(cropper) => this.cropper = cropper}
            image={this.state.image}
          />
          <center style={{marginTop: '10px'}}>
            <button style={{padding: '5px 7px', background: 'white', borderWidth: '1px'}} onClick={() => this.cropAndSave(this.state.imageCropped)}>Place the image</button>
          </center>
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
      cursor: 'pointer'
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
      </div>
    )
  }

  onDrop (acceptedFiles) {
    this.setState({
      image: URL.createObjectURL(acceptedFiles[0])
    })
  }

  cropAndSave () {
    this.props.onSave(this.cropper.getImage())
  }
};
