import { NavLink } from 'react-router-dom';
 
function Nav() {
    return (
        <aside className='sideNav'>
            <ul className='navItems'>
                <li><NavLink activeClassName="activeLink" to='/'>Home</NavLink></li>
                <br></br>
                <li><NavLink activeClassName="activeLink" to='/list'>Entries</NavLink></li>
                <br></br>
                <li><NavLink activeClassName="activeLink" to='/form'>New Entry</NavLink></li>
            </ul>
        </aside>
    );
}

export default Nav