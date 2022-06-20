import React, { useContext, useState } from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo
} from './styled';
const NavBar = () => {



    return (
        <>
            <Nav>

                <Logo>dimitri.finger</Logo>

                <Bars />
                <NavMenu >
                    <NavLink to='/about' >
                        About
                    </NavLink>
                    <NavLink to='/contact' >
                        Contact Us
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar