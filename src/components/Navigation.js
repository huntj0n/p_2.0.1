import React from 'react';
import '../Styles/Navigation.scss';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav__columns">
                    <div className="nav__column">
                        <div className="nav__label">Menu</div>
                        <ul className="nav__links">
                            <li>
                                <NavLink to='/about' exact>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' exact>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/resume' exact>
                                    Resume
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__column">
                        <div className="nav__label">Contact</div>
                        <div className="nav__infos">
                            <ul className="nav__info">
                                <li className="nav__info__label">Email</li>
                                <li>
                                <NavLink to='/contact' exact>
                                    Get in touch with us
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to='/contact' exact>
                                    Get a free quote
                                </NavLink>
                                </li>
                            </ul>
                            <ul className="nav__info">
                                <li className='nav__info__label'>Headquarters</li>
                                <li>Route du 1 Chocolate</li>
                                <li>Fribourg</li>
                                <li>Swizerland</li>
                            </ul>
                            <ul className="nav__info">
                                <li className='nav__info__label'>Telefono</li>
                                <li>+99 (999) 999 9999</li>
                            </ul>
                            <ul className="nav__info">
                                <li className='nav__info__label'>Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
