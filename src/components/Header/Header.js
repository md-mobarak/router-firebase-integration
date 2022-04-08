import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div className='header'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/register">Register</NavLink>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid ? <button onClick={handleSignOut}>Sign-Out</button> :
                    < NavLink to="/login">Login</NavLink>
                }
            </nav>
        </div >
    );
};

export default Header;