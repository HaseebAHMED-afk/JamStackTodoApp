import React from "react"
import Button from '@material-ui/core/Button'
import '../style.css'

export default function Home() {
  return <div className="app" >
    <div className="user" >
    <h1 className="main-heading" >
      Get Stuff Done
    </h1>
      <p className='username' >Welcome </p>
    </div>
    <Button variant='contained' color='primary' className='login-btn'  >Log In</Button>
  </div>
}
