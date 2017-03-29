import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import Image from 'components/image'
import MarkedSafe from 'components/marked-safe'

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

const defaults = {
  name: 'Your Name',
  event: 'Brexit',
  date: '29th March 2017, 12:30pm'
}

const labelStyle = {
  width: '150px',
  display: 'inline-block'
}

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      imageYou: '',
      event: '',
      imageEvent: '',
      date: ''
    }
    this.update = this.update.bind(this)
  }

  render () {
    return (
      <div style={{padding: '30px'}}>
        <label style={labelStyle}>Your Name:</label> <input placeholder={defaults.name} onBlur={(e) => this.update('name', e.target.value)} /><br /><br />
        <label style={labelStyle}>Event Name:</label> <input placeholder={defaults.event} onBlur={(e) => this.update('event', e.target.value)} /><br /><br />
        <label style={labelStyle}>Date:</label> <input placeholder={defaults.date} onBlur={(e) => this.update('date', e.target.value)} /><br /><br />
        <label style={labelStyle}>Your pic:</label> <Image onSave={(url) => this.update('imageYou', url)} /><br /><br />
        <label style={labelStyle}>Event pic:</label> <Image onSave={(url) => this.update('imageEvent', url)} /><br />
        <div style={{maxWidth: '500px', position: 'absolute', top: '30px', right: '30px'}}>
          <div id="result"><MarkedSafe
            you={this.state.name || defaults.name}
            youUrl={this.state.imageYou || defaultImage}
            event={this.state.event || defaults.event}
            eventUrl={this.state.imageEvent || defaultImage}
            date={this.state.date || defaults.date}
          /></div>
          <button onClick={save}>save</button>
        </div>
      </div>
    )
  }

  update (name, value) {
    this.setState({
      [name]: value
    })
  }
};
