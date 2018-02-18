import logo from '../logo.svg';
import React from 'react';

const Navbar = () => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">News Inc.</h1>
        </header> 
    )
}

export default Navbar;