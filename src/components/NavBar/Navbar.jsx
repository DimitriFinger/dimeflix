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

                <NavMenu>
                    <Logo />
                    <MenuItem to='/home'>Início</MenuItem>
                    <MenuItem to='/series'>Series</MenuItem>
                    <MenuItem to='/movies'>Filmes</MenuItem>
                    <MenuItem to='/latest'>Bombando</MenuItem>
                    <MenuItem to='/my-list'>Minha lista</MenuItem>

                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar