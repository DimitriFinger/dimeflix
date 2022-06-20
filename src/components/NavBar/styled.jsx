import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Logo = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: 1.8rem;
  padding-bottom: 5px;
  margin-left: 15px;
  margin-right: 20px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  background: #141414;
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  justify-content: flex-start;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled(Link)`  
  color: white;
  margin-left: 18px;
  text-decoration: none;
`;