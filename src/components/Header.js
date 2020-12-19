import React, { useState, useEffect } from 'react';
import '../Styles/Header.scss';
import {NavLink, withRouter} from 'react-router-dom';
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';
import gsap from 'gsap';

let tl = gsap.timeline();

const Header = ({dimensions}) => {

    const [menuState, setMenuState] = useState({menuOpened: false});

    useEffect(() => {
        if(menuState.menuOpened){
            gsap.to('nav', {css: {display: 'block'}});
            gsap.to('body', {css: {overflow: 'hidden'}});

            tl.to('.App', {
                duration: 1,
                y: (dimensions.width <= 654 ? '70vh' : dimensions.height/2),
                ease: "ease.inOut"
            })
            .to('.header__menuBtn span', {
                duration: .6,
                delay: -1,
                scaleX: 0,
                transformOrigin: "50% 0%",
                ease: "expo.inOut",
            })
            //for reference: im targeting specific id's from SVG
            .to('#Path_1', {
                duration: 0.6,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 5
                }
            })
            .to('#Path_2', {
                duration: 0.4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 20
                }
            })
            .to('#Line_1', {
                duration: 0.4,
                delay: -.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 18
                }
            })
            .to('#circle', {
                duration: 0.6,
                delay: -.8,
                css: {
                    strokeDashoffset: 0
                }
            })
            .to('.menuBtn__close', {
                duration: 0.6,
                delay: -.8,
                css: {
                    display: 'block'
                }
            })
        } else {
            tl.to('.App', {
                duration: 1,
                y: 0,
                ease: 'expo.inOut'
            })
            .to('#circle', {
                duration: 0.6,
                delay: -.6,
                css: {
                    strokeDashoffset: -193,
                    strokeDasharray: 227
                }
            })
            .to('#Path_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            })
            .to('#Path_2', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            })
            .to('#Line_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 40
                }
            })
            .to('.header__menuBtn span', {
                duration: .6,
                delay: -.6,
                scaleX: 1,
                transformOrigin: "50% 0%",
                ease: "expo.inOut",
            })
            .to('.menuBtn__close', {
                css: {
                    display: 'none'
                }
            })
            .to('body', {
                css: {
                    overflow: 'auto'
                }
            })
            .to('nav', {
                css: {
                    display: 'none'
                }
            })
        }
    }, [menuState.menuOpened])

    return (
        <header>
            <div className="container">
                <div className="row v-center space-between">
                    <NavLink to="/" exact className="logo">
                        JH.
                    </NavLink>
                    <div className="nav__toggle">
                        <div className='header__menuBtn' onClick={() => setMenuState({menuOpened: true})}>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="menuBtn__close" onClick={() => setMenuState({menuOpened: false})}>
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)
