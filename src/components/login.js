import React from 'react'
import FacebookLogin from 'react-facebook-login'

export default function Login (props) {
  return (
    <FacebookLogin
      appId="808302666012881"
      autoLoad
      fields="name,picture"
      callback={props.onLogin}
    />
  )
}
