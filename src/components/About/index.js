import './index.css';
import { Link  } from 'react-scroll';


const About = () => {
    return (
        <div id='about' className='about-section'>

            <div className='about-section-left-right-cards-wrapper'>
                <div className='about-section__left-card'>
                    <p className='about-section__left-card-role-text'>UI/UX DESIGNER</p>
                    <h1 className='about-section__left-card-intro-text'>Hello,  my name is Madelyn Torff</h1>
                    <p className='about-section__left-card-description-text'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>

                    <div className='about-section__left-card-btns-wrapper'>
                        <Link 
                            to="projects" spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            className='about-section__left-card-btns about-section-projects-btn'
                        >
                            Projects 
                        </Link>
                        <button type="button" className='about-section__left-card-btns about-section-linkedin-btn'>
                            LinkedIn 
                        </button>
                    </div>
                </div>

                <div className='about-section-right-card'>
                    <img className='about-section__right-card-img' src="/image.png" alt="profile img"/>
                </div>
            </div>

            
        </div>
    )
}

export default About;