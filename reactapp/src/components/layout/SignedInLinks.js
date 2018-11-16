import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {

    return (
        <ul className="right">
            <li><NavLink to='/createproject'>New Project</NavLink></li>
            <li>  <NavLink to='/'>Logout</NavLink></li>
            <li> <NavLink to='/' className='btn btn-floating red lighten-1 '>NE</NavLink></li>
        </ul>
    )
}
export default SignedInLinks