import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    background-color: var(--footer-bg);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const FooterColumn = styled.div`
    width: 15vw;
    padding: 15px 35px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
`;

const ColumnHeader = styled.h4`
    margin-bottom: 1.5vh;
    font-size: 15px;
    color:white;
    font-family: 'Poppins';
    font-weight: 600;
`;

const ColumnItem = styled.a`
    margin-bottom: 2vh;
    font-size: 13px;
    color:white;
    font-family: 'Poppins';
    font-weight: 400;
`;

export default function Footer () {
    return (
        <FooterContainer>
            <FooterColumn>
                <ColumnHeader>Comprar</ColumnHeader>

                <ColumnItem>Carros usados ou seminovos</ColumnItem>
                <ColumnItem>Carros novos</ColumnItem>
                <ColumnItem>Motos usadas ou seminovas</ColumnItem>
                <ColumnItem>Motos novas</ColumnItem>
                <ColumnItem>AutoPago</ColumnItem>
            </FooterColumn>

            <FooterColumn>
                <ColumnHeader>Vender</ColumnHeader>

                <ColumnItem>Vender meu veículo</ColumnItem>
                <ColumnItem>Vender minha moto</ColumnItem>
                <ColumnItem>Gerenciar meu anúncio</ColumnItem>
                <ColumnItem>Autopago</ColumnItem>
            </FooterColumn>

            <FooterColumn>
                <ColumnHeader>Serviços</ColumnHeader>

                <ColumnItem>Tabela Fipe Webmotors</ColumnItem>
                <ColumnItem>0KM</ColumnItem>
                <ColumnItem>Notícias WM1</ColumnItem>
                <ColumnItem>Autopago</ColumnItem>
                <ColumnItem>Financiamento</ColumnItem>
                <ColumnItem>Consórcio</ColumnItem>
                <ColumnItem>Seguro</ColumnItem>
                <ColumnItem>Plataforma Revendedores</ColumnItem>
                <ColumnItem>Autoinsights</ColumnItem>
            </FooterColumn>
            
            <FooterColumn>
                <ColumnHeader>Ajuda</ColumnHeader>

                <ColumnItem>Compradores e anunciantes</ColumnItem>
                <ColumnItem>Como vender</ColumnItem>
                <ColumnItem>Como comprar</ColumnItem>
                <ColumnItem>Lojas e Concessionárias</ColumnItem>
                <ColumnItem>Mapa do site</ColumnItem>
                <ColumnItem>Código de defesa do consumidor</ColumnItem>
                <ColumnItem>Gerenciamento de Cookies</ColumnItem>
                <ColumnItem>Trabalhe com a gente</ColumnItem>
                <ColumnItem>Sobre nós</ColumnItem>
                <ColumnItem>Segurança</ColumnItem>
                <ColumnItem>Política de privacidade</ColumnItem>
                <ColumnItem>LGPD</ColumnItem>
            </FooterColumn>

            <FooterColumn>
                <ColumnHeader>Parceiros</ColumnHeader>

                <ColumnItem>Carsales</ColumnItem>
                <ColumnItem>Loop</ColumnItem>
            </FooterColumn>
        </FooterContainer>
    )
};