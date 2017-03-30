import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import Image from 'components/image'
import Login from 'components/login'
import MarkedSafe from 'components/marked-safe'
import autobinder from 'autobind-decorator'
import fetchImage from 'utils/fetch-image'
import publishImage from 'utils/publish-image'

const defaultImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

function save () {
  html2canvas(document.getElementById('result')).then((canvas) => {
    canvas.id = 'remove'
    document.body.appendChild(canvas)
    const link = document.createElement('a')
    link.download = 'marked-safe.jpg'
    link.href = canvas.toDataURL('image/jpeg')
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    document.getElementById('remove').remove()
  })
}

function publish (at, callback) {
  html2canvas(document.getElementById('result')).then((canvas) => {
    publishImage(at, canvas.toDataURL('image/jpeg'), callback)
  })
}

const defaults = {
  name: 'Your Name',
  event: 'Brexit',
  date: '29th March 2017, 12:30pm'
}

const labelStyle = {
  width: '150px',
  display: 'inline-block',
  clear: 'both'
}

@autobinder
export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      imageYou: '',
      event: '',
      imageEvent: '',
      date: '',
      loggedIn: false,
      shared: false,
      hideImage: true,
      loading: false
    }
  }

  render () {
    let login
    if (!this.state.loggedIn) {
      login = <Login onLogin={this.loggedIn} />
    } else {
      login = <h2>{`Hello ${this.state.name}`}</h2>
    }

    let share
    if (!this.state.shared && this.state.loggedIn) {
      share = <button style={{fontSize: '120%', padding: '10px', margin: 'auto'}} onClick={() => this.update('loading', true) || publish(this.state.at, this.posted)}>Share</button>
    } else if (this.state.loggedIn) {
      share = <a href={this.state.shared}>See the post</a>
    }

    let loadingTxt
    if (this.state.loading) {
      loadingTxt = 'Wait for it...'
    }

    let showImage
    if (this.state.hideImage) {
      showImage = <a onClick={() => this.update('hideImage', false)}>Edit profile image</a>
    }

    return (
      <div style={{padding: '30px'}}>
        <div style={{float: 'left', marginBottom: '30px'}}>
          <div>{login}</div><br /><br />
          <label style={labelStyle}>Your Name:</label> <input placeholder={this.state.name || defaults.name} onBlur={(e) => e.target.value && this.update('name', e.target.value)} /><br /><br />
          <label style={labelStyle}>Event Name:</label> <input placeholder={defaults.event} onBlur={(e) => this.update('event', e.target.value)} /><br /><br />
          <label style={labelStyle}>Date:</label> <input placeholder={defaults.date} onBlur={(e) => this.update('date', e.target.value)} /><br /><br />

          { showImage }<br />
          <div style={{display: this.state.hideImage ? 'none': 'block'}}>
            <label style={labelStyle}>Your pic:</label> 
            <div style={{paddingTop: '30px'}}><Image onSave={(url) => this.update('imageYou', url)} /></div><br style={{clear: 'both'}} /><br />
          </div><br />
          <label style={labelStyle}>Event pic:</label>
          <div style={{paddingTop: '30px'}}><Image onSave={(url) => this.update('imageEvent', url)} /></div>
        </div>
        <div style={{maxWidth: '500px', float: 'right', marginBottom: '30px'}}>
          <div id="result"><MarkedSafe
            you={this.state.name || defaults.name}
            youUrl={this.state.imageYou || defaultImage}
            event={this.state.event || defaults.event}
            eventUrl={this.state.imageEvent || defaultImage}
            date={this.state.date || defaults.date}
          /></div>
          <div style={{textAlign: 'center'}}>
            <button style={{fontSize: '120%', padding: '10px', marginRight: '3px'}} onClick={save}>Save</button>
            {share} {loadingTxt}
          </div>
        </div>
      </div>
    )
  }

  posted (response) {
    this.setState({
      loading: false,
      shared: `https://www.facebook.com/${response.post_id}`
    })
  }

  update (name, value) {
    this.setState({
      shared: false,
      [name]: value
    })
  }

  loggedIn (response) {
    this.update('at', response.accessToken)
    this.update('name', response.name)

    fetchImage(response.picture.data.url, (url) => {
      this.update('imageYou', url)
      this.update('loggedIn', true)
    })
  }
};
