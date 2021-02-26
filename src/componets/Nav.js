import React , {useContext} from 'react'
import Button from '@material-ui/core/Button'
import { IdentityContext } from '../../identity-context'
import '../style.css'
import { Link } from 'gatsby'

const Nav = () => {

    const { identity: netlifyIdentitiy } = useContext(IdentityContext)

    return (
        <div className='navbar' >
            <div>
            <Link className='link-elem' to='/' >HOME</Link>
            <Link className='link-elem' to='/app' >DASHBOARD</Link>
            </div>
            <Button variant='outlined' color='secondary' onClick={() => {netlifyIdentitiy.open()}} >Log Out</Button>
        </div>
    )
}

export default Nav
