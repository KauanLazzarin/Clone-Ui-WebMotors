import LogoSrc from './../../assets/logo.svg';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
    width: 100%;
    padding: 1.4vh 1vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`;

const Logo = styled.img`
    width: 8vw;
`;

export default function Header () {
    return (
        <HeaderContainer>
            <Logo src={LogoSrc} />

            <Navigation />
        </HeaderContainer>
    )
};