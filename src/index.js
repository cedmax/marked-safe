import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import App from 'app'

(function (d, s, id) {
  const fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  const js = d.createElement(s)
  js.id = id
  js.src = '//connect.facebook.net/en_US/all.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

window.fbAsyncInit = function () {
  window.FB.init({
    appId: '808302666012881'
  })
}

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('app', () => {
    const NextApp = require('app').default

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
