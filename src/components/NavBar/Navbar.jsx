import {
    Nav,
    NavMenu,
    Logo,
    MenuItem,
    ProfileIcon,
    SearchIcon,
    NotificionIcon
} from './styled';


import searchIcon from '../../assets/search-icon.svg'
import profileIcon from '../../assets/profile-icon.png'
import notificationIcon from '../../assets/notification-icon.svg'


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
                    <SearchIcon src={searchIcon} />
                    <MenuItem to='/my-list'>Infantil</MenuItem>
                    <NotificionIcon src={notificationIcon} />
                    <ProfileIcon src={profileIcon} />

                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar