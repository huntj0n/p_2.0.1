import React from 'react';
import '../Styles/Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row v-center space-between">
                    <a href="/" className="logo">
                        JH.
                    </a>
                    <nav>
                        <span></span>
                        <span></span>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
