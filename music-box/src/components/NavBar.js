import React from 'react';
import logo from '../assets/images/logo.png'
import avatar from '../assets/images/avatar.png'

function NavBar() {
    return (
        <nav>
        <div class="container">
            <img class="logo" src={logo} alt="Logo" />
            <img src={avatar} alt="Avatar" class="avatar" />
            </div>
        </nav>
    );
}

export default NavBar;