import styled from 'styled-components';

const NavigationContainer = styled.nav`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const NavigationLink = styled.a`
    font-size: 16px;
    color: var(--small-text);
    font-family: 'Poppins';
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
`; 

const IconsContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export default function Navigation () {
    return (
        <NavigationContainer>
            <NavigationLink href="/">Comprar</NavigationLink>
            <NavigationLink href="/">Vender</NavigationLink>
            <NavigationLink href="/">Serviços</NavigationLink>
            <NavigationLink href="/">Ajuda</NavigationLink>
            <NavigationLink href="/">Entrar</NavigationLink>
            
            <IconsContainer>
                <NavigationLink href="/">
                    <i className="material-icons">favorite_border</i>
                </NavigationLink>

                <NavigationLink href="/">
                    <i className="material-icons">chat_bubble_outline</i>
                </NavigationLink>

                <NavigationLink href="/">
                    <i className="material-icons notification-icon">notifications_none</i>
                </NavigationLink>
            </IconsContainer>
        </NavigationContainer>
    )
};