import styled from 'styled-components';

const NavigationContainer = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-self: flex-start;
    margin-bottom: 3vh;
    margin-top: -2vh;

`;

const NavigationLink = styled.a`
    font-size: 16.5px;
    font-family: 'Poppins';
    font-weight: 600;
    margin: 0 1vw;
    color: var(--small-text);
    padding-bottom: 5px;

    &:first-of-type {
        border-bottom: 3px solid var(--bg-red);
        color: var(--text-strong);
    }
`;

export default function SearchNavigation () {
    return (
        <NavigationContainer>
            <NavigationLink href="/">Comprar Carros</NavigationLink>
            <NavigationLink href="/">Comprar Motos</NavigationLink>
            <NavigationLink href="/">Quero Vender</NavigationLink>
            <NavigationLink href="/">Quero Financiar</NavigationLink>
        </NavigationContainer>
    )
};