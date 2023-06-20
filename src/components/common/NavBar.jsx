
import { Menu } from 'semantic-ui-react';

import { logo } from '../../constants/constant';

import {Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu borderless fixed='top' className='head' >
            <Menu.Item>
                <img src={logo} alt=" logo" style={{width: 80}} />
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to='/' />
            <Menu.Item name="Recipes" as={Link} to='/recipes' />
        </Menu>
        // <div>hello</div>
    )
}

export default NavBar;