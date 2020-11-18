import React from 'react';
import '../Styles/Showcase.scss';
import { ReactComponent as ShowcaseNext} from '../assets/arrow-right.svg';
import { ReactComponent as ShowcasePrev} from '../assets/arrow-left.svg';

const showcaseProjects = [
    {
        id: 1, 
        subtitle: 'Amazon',
        title: 'Work Hard. Have Fun. Make Jeff Money.',
        image: [require('../assets/coffee.jpeg')],
    },
    {
        id: 2, 
        subtitle: 'EvilCorp', 
        title:'Helps you connect to corporate marketers by selling your personal data',
        image: 'desert.jpeg',
    },
    {
        id: 3,
        subtitle: 'Ivory Foundation',
        title: 'Living life through giving',
        image: 'mountains.jpeg',
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
                    <div className="showcase__navPrev disbaled">
                        <ShowcasePrev />
                    </div>
                    <div className="showcase__navNext">
                        <ShowcaseNext />
                    </div>
                </div>
                <div className="row">
                    <div className="showcase__project">
                        {showcaseProjects.map((project) => (
                            <div className="project" key={project.id}>
                                <div className="project__details">
                                    <span>{project.subtitle}</span>
                                    <h2>{project.title}</h2>
                                </div>
                                <div className="project__image">
                                    <img 
                                    // src={`../assets/${project.image}`} 
                                    src={project.image}
                                    alt=''/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
