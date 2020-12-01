import React from 'react';
import '../Styles/Showcase.scss';
import { ReactComponent as ShowcaseNext} from '../assets/arrow-right.svg';
import { ReactComponent as ShowcasePrev} from '../assets/arrow-left.svg';

import Airline from '../../src/components/images/airline.png'
import Espresso from '../../src/components/images/espresso.png'
import Run from '../../src/components/images/run.png'


const showcaseProjects = [
    {
        id: 1, 
        subtitle: 'Amazon',
        title: 'Work Hard. Have Fun. Make Jeff Money.',
        pic: Espresso
    },
    {
        id: 2, 
        subtitle: 'EvilCorp', 
        title:'Helps us sell you',
        pic: Airline
    },
    {
        id: 3,
        subtitle: 'Ivory Foundation',
        title: 'Living life through giving',
        pic: Run
    },
    // {
    //     id: 4,
    //     subtitle: 'Covid19 Report',
    //     title: 'Statistics from across the globe!'
    // }
]

const Showcase = () => {
    return (
        <section className='showcase'>
            <div className="container-fluid">
                <div className="showcase__nav">
                    <div className="showcase__arrow disabled">
                        <ShowcasePrev />
                    </div>
                    <div className="showcase__arrow">
                        <ShowcaseNext />
                    </div>
                </div>
                <div className="row">
                    {showcaseProjects.map((project) => (
                        <div className="showcase__project" key={project.id}>
                            <div className="showcase__projectDetails">
                                <span>{project.subtitle}</span>
                                <h2>{project.title}</h2>
                            </div>
                            <div className="showcase__img">
                                <img src={project.pic} alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Showcase
