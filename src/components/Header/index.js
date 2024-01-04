import './index.css';
import { Link  } from 'react-scroll';

const menuItemsArr = [
    {
        id: '1',
        title: 'About',
        path: 'about'
    },
    {
        id: '2',
        title: 'Projects',
        path: 'projects'
    },
    {
        id: '3',
        title: 'Contacts',
        path: 'contacts'
    },
]


const Header = () => {


    const MenuItem = (props) => {
        const {menuItem} = props;
        const {title, path} = menuItem;

        return (
            <li className='header-section-menu-item'>
                <Link 
                    to={path} 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} 
                    className='header-section-menu-item-links'
                >
                    {title}
                </Link>
            </li>
        )
    }



    return (
        <nav className='header-section'>
            <p className='header-section-logo-text'>
                Madelyn Torff
            </p>

            <ul className='header-section-menu-card'>
                {menuItemsArr.map(menuItem => <MenuItem key={menuItem.id} menuItem={menuItem}/>)}
            </ul>  
        </nav>
    )
}

export default Header;