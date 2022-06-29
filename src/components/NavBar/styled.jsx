import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Logo = styled.div`
    background-color: red;
    width: 105px;
    height: 31px;
    margin-left: 57px;
`;

export const Nav = styled.nav`
    background: #141414;
    height: 68px;
    width: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    width: 100%;
    margin: 0 57px 0 25px;
`;

export const MenuItem = styled(Link)`  
    color: #E5E5E5;
    margin-left: 18px;
    text-decoration: none;
    font-size: 0.9rem;
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const ProfileIcon = styled.img`
    cursor: pointer;
    margin-left: 20px;

`;

export const SearchIcon = styled.img`
     cursor: pointer;
`;

export const NotificionIcon = styled.img`
    cursor: pointer;
    margin-left: 25px;
`;

export const LeftMenuContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid red;
`;
export const RightMenuContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid green;
    margin-right: 35px;
`;