import './index.css';


const Contacts = () => {
    return (
        <div id='contacts' className='contacts-section'>
            <div className='contacts-section__icons-wrapper'>
                <img src='/instagram_svg.svg' className='contacts-section__icons' alt="footer icons"/>
                <img src='/linkedIn_svg.svg' className='contacts-section__icons' alt="footer icons"/>
                <img src='/message_svg.svg' className='contacts-section__icons' alt="footer icons"/>
            </div>

            <p className='contacts-section__license-text'>
                Copyright &copy; 2024, All rights reserved
            </p>

            <div className='contacts-section__image-wrapper'>
                <img className='contacts-section__image' src="/Vector.png" alt="add projects section img" />
            </div>
        </div>
    )
}

export default Contacts;