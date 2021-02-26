import React , {useContext} from 'react'
import { Router } from '@reach/router'
import { IdentityContext } from '../../identity-context'
import Nav from '../componets/Nav'
import Button from '@material-ui/core/Button'
import Dashboard from '../componets/Dashboard'


let DashLoggedOut = (props) => {
    const { user , identity: netlifyIdentity } = useContext(IdentityContext)

    return (
        <div className="app" >
    <Nav />
    <div className="user" >
    <h1 className="main-heading" >
      Get Stuff Done
    </h1>
      <p className='username' >Welcome {user && user.user_metadata.full_name.toUpperCase()} </p>
    </div>
    <Button onClick={()=>{
      netlifyIdentity.open();
    }} variant='contained' color='primary' className='login-btn'  >Log In</Button>
  </div>
    )
}

export default props => {
    const { user  } = useContext(IdentityContext)

    if(!user){
        return(
            <Router>
                <DashLoggedOut path='/app' />
            </Router>
        )
    }

    return(
        <Router>
            <Dashboard path='/app' />
        </Router>)
    
}
