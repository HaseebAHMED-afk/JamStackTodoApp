import React, { useContext } from "react"
import Button from '@material-ui/core/Button'
import '../style.css'
import {IdentityContext} from '../../identity-context';
import Nav from "../componets/Nav";

export default function Home() {

  const { user , identity: netlifyIdentity } = useContext(IdentityContext)

  return (<div className="app" >
    <Nav />
    <div className="user" >
    <h1 className="main-heading" >
      Get Stuff Done
    </h1>
      <p className='username' >Welcome {user && user.user_metadata.full_name.toUpperCase()} </p>
    </div>
    {
      user ? null : (<Button onClick={()=>{
        netlifyIdentity.open();
      }} variant='contained' color='primary' className='login-btn'  >Log In</Button>)
    }
    
  </div>)
}
