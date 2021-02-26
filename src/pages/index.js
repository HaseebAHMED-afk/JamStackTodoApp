import React from "react"
import Button from '@material-ui/core/Button'
import '../style.css'

export default function Home() {
  return <div className="app" >
    <h1 className="main-heading" >
      Get Stuff Done
    </h1>
    <Button variant='contained' color='secondary' className='login-btn'  >Log In</Button>
  </div>
}
