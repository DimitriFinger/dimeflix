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
  color: white;
  margin-left: 18px;
  text-decoration: none;
`;