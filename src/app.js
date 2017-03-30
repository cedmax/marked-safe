import React, { Component } from 'react'
import autobinder from 'autobind-decorator'
import fetchImage from 'utils/fetch-image'
import save from 'utils/save'
import Form from 'components/form'
import MarkedSafe from 'components/marked-safe'
import defaultState from 'default-state'

@autobinder
export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = defaultState
  }

  render () {
    return (
      <div style={{padding: '30px'}}>
        <div style={{float: 'left', marginBottom: '30px'}}>
          <Form {...this.state} onUpdate={this.update} onLogin={this.loggedIn} />
        </div>
        <div style={{maxWidth: '500px', float: 'right', marginBottom: '30px'}}>
          <div id="result"><MarkedSafe
            you={this.state.name}
            youUrl={this.state.imageYou}
            event={this.state.event}
            eventUrl={this.state.imageEvent}
            date={this.state.date}
          /></div>
          <div style={{textAlign: 'center'}}>
            <button style={{fontSize: '120%', padding: '10px', marginRight: '3px'}} onClick={save}>Save</button>
          </div>
        </div>
      </div>
    )
  }

  update (name, value) {
    this.setState({
      shared: false,
      [name]: value
    })
  }

  loggedIn (response, callback) {
    this.update('at', response.accessToken)
    this.update('name', response.name)

    fetchImage(response.picture.data.url, (url) => {
      this.update('imageYou', url)
      callback()
    })
  }
};
