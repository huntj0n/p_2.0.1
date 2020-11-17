import React from 'react';
import '../Styles/Banner.scss';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating engaging websites</span>  
                        </div>
                        <div className="line">
                            <span>is what I do.</span>  
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">More about me <RightArrow/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
