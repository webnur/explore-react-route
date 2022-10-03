import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <NavLink className={({ isActive }) => isActive ?'active': undefined} to='/about'>about</NavLink>
            <NavLink to='/home'>home</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/products'>products</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </div>
    );
};

export default Header;