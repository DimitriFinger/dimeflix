import {
    Nav,
    NavMenu,
    Logo,
    MenuItem,
    ProfileIcon,
    SearchIcon,
    NotificionIcon,
    LeftMenuContainer,
    RightMenuContainer
} from './styled';


import searchIcon from '../../assets/search-icon.svg'
import profileIcon from '../../assets/profile-icon.png'
import notificationIcon from '../../assets/notification-icon.svg'


const NavBar = () => {



    return (
        <>
            <Nav>

                <Logo />
                <NavMenu>

                    <LeftMenuContainer>
                        <MenuItem to='/home'>Início</MenuItem>
                        <MenuItem to='/series'>Series</MenuItem>
                        <MenuItem to='/movies'>Filmes</MenuItem>
                        <MenuItem to='/latest'>Bombando</MenuItem>
                        <MenuItem to='/my-list'>Minha lista</MenuItem>
                    </LeftMenuContainer>

                    <RightMenuContainer>
                        <SearchIcon src={searchIcon} />
                        <MenuItem to='/my-list'>Infantil</MenuItem>
                        <NotificionIcon src={notificationIcon} />
                        <ProfileIcon src={profileIcon} />
                    </RightMenuContainer>

                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar