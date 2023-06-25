//** React-router-dom NavLink - is able to understand when it is active unlike Link */
    import { NavLink } from "react-router-dom";

//** Code for <nav> to be used through the whole App */

const NavSection = () => {

    //** FUNCTION HEAD */



    //** RETURN FUNCTION */
    return (
        <nav>
            <ul
                className='nav-links'
            >
                <li>
                    <NavLink 
                        to='/'
                        className='nav-link'
                    >
                        SĀKUMS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/contact'
                        className='nav-link'
                    >
                        KONTAKTI
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/safety'
                        className='nav-link'
                    >
                        DROŠĪBA
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/policy'
                        className='nav-link'
                    >
                        NOTEIKUMI
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavSection;