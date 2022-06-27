import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Logo = styled.div`
  background-color: red;
  width: 93px;
  height: 31px;
`;

export const Nav = styled.nav`
  background: #141414;
  height: 68px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
`;

export const MenuItem = styled(Link)`  
  color: #E5E5E5;
  margin-left: 18px;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const ProfileIcon = styled.img`
    cursor: pointer;

`;

export const SearchIcon = styled.img`
  cursor: pointer;
`;

export const NotificionIcon = styled.img`
  cursor: pointer;
`;