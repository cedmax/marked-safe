import React, { Component } from 'react'
import autobinder from 'autobind-decorator'
import Image from 'components/image'
import Login from 'components/login'
import Presets from 'components/presets'

const labelStyle = {
  width: '150px',
  display: 'inline-block',
  clear: 'both'
}

@autobinder
export default class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loggedIn: false,
      hideImage: true
    }
  }

  render () {
    let login
    if (!this.state.loggedIn) {
      login = <Login onLogin={this.loggedIn} />
    } else {
      login = <h2>{`Hello ${this.props.name}`}</h2>
    }

    let showImage
    if (this.state.hideImage) {
      showImage = <a onClick={() => this.setState({'hideImage': false})}>Edit profile image</a>
    }

    return (
      <div className="form">
        <div style={{border: '1px dotted #ddd', padding: '0 20px 20px'}}>
          <h2>You</h2>
          <div>{login}</div><br /><br />
          <label style={labelStyle}>Your Name:</label> <input placeholder={this.props.name} onBlur={(e) => this.update('name', e.target.value)} /><br /><br />
          { showImage }<br />
          <div style={{display: this.state.hideImage ? 'none' : 'block'}}>
            <label style={labelStyle}>Your pic:</label>
            <div style={{paddingTop: '15px'}}><Image size={200} onSave={(url) => this.update('imageYou', url)} /></div><br style={{clear: 'both'}} /><br />
          </div><br />
        </div>
        <div style={{border: '1px dotted #ddd', padding: '0 20px 20px', marginTop: -1}}>
          <h2>The Event</h2>
          <label style={labelStyle}>Presets:</label> <Presets presets={this.props.presets} preSelect={this.props.preSelect} /><br /><br />
          <label style={labelStyle}>Event Name:</label> <input placeholder={this.props.event} onBlur={(e) => this.update('event', e.target.value)} /> 
          <br /><br />
          <label style={labelStyle}>Date:</label> <input placeholder={this.props.date} onBlur={(e) => this.update('date', e.target.value)} /><br /><br />

          <label style={labelStyle}>Event pic:</label>
          <div style={{paddingTop: '15px'}}><Image size={200} onSave={(url) => this.update('imageEvent', url)} /><br style={{clear: 'both'}} /></div>
        </div>
      </div>
    )
  }

  update (key, value) {
    if (value) {
      this.props.onUpdate(key, value)
    }
  }

  loggedIn (response) {
    this.props.onLogin(response, () => {
      this.setState({
        loggedIn: true
      })
    })
  }
}
