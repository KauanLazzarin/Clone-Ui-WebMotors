import styled from 'styled-components';

const MainContainer = styled.div`
    width: 96%;
    margin: 0 auto 3vh;

    &::before {
    content: 'Na Webmotors';
    width: 80%;
    margin: 0 0 2vh 1vw ;
    font-family: 'Poppins';
    color: var(--dark-gray);
    font-size: 16px;
    font-weight: 500;
    height: 20px;
    display: block;
    }
`;

const ItemsContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Item = styled.a`
    width: 20vw;
    margin: 0 0.5vw;
    border-radius: 8px;
    background-color: var(--bg-red);
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 10px;
    font-family: 'Poppins';
    font-size: 18px;
    color: white;
    font-weight: 400;
`;

export default function BottomMenu () {
    return (
        <MainContainer>
            <ItemsContainer>
                <Item>Financiamento</Item>
                <Item>Venda seu veículo</Item>
                <Item>Catálogo de 0KM</Item>
                <Item>Seguro</Item>
                <Item>Tabela Fipe</Item>
                <Item>AutoPago</Item>
                <Item>Consórcio Santander</Item>
            </ItemsContainer>
        </MainContainer>
    )
};