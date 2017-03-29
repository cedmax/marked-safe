import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import App from 'app'

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
