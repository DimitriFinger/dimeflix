import {
    Nav,
    NavMenu,
    Logo,
    MenuItem
} from './styled';

import { Link } from 'react-router-dom'

const NavBar = () => {



    return (
        <>
            <Nav>

                <Logo>dimitri.finger</Logo>
                <NavMenu>
                    {/* <MenuItem><Link to="#">Teste</Link></MenuItem> */}
                    <MenuItem><a href="#">Teste</a></MenuItem>
                    <MenuItem><a href="#">Teste</a></MenuItem>
                    <MenuItem><a href="#">Teste</a></MenuItem>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar