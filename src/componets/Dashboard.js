import React , {useState , useContext} from 'react'
import { IdentityContext } from '../../identity-context'
import Nav from './Nav'
import TextField from '@material-ui/core/TextField'
import '../style.css'
import Button from '@material-ui/core/Button'

const Dashboard = () => {

    const {user} = useContext(IdentityContext)

    const userName = user.user_metadata.full_name;

    const [text, setText] = useState('')

    return (
        <div className='app' >
            <Nav />
        <h1 className="main-heading" >Todo List</h1> 
        <div className='input-area' >
        <input type='text' className='input' placeholder="What's the plan today????" value={text} onChange={(e) => {setText(e.target.value)}} />
        <Button variant='contained' color='primary' >Add</Button>
        </div>
        </div>
    )
}

export default Dashboard
