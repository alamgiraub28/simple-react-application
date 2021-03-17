import React from 'react';
import logo from './../../logo-team.png';

const Header = () => {
    return (
        <div>
            <h1 className="bg-success text-light py-5 fw-bold logo-header"> <img src={logo} alt=""/> Bangladesh Tigers Cricket Team</h1>
        </div>
    );
};

export default Header;