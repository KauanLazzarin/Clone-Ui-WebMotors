import styled from 'styled-components';
import peruaImg from '../../assets/perua.jpg';
import codigoDeTransitoImg from '../../assets/codigo-de-transito.jpg';
import yarisImg from '../../assets/yaris.jpg';

const news = [
    {
        title: 'Peruas vão acabar no Brasil; hoje, são só 5 opções',
        img: peruaImg,
    },

    {
        title:'Toyota Yaris é eleito carro do ano na Europa',
        img: yarisImg
    },

    {
        title: 'Mudanças no código de trânsito que afetam motociclistas',
        img: codigoDeTransitoImg
    }
];

const MainContainer = styled.div`
    width: 100%;
    margin: 8vh auto;
    
    &::before {
    content: 'Notícias';
    width: 95%;
    margin: 0 auto;
    font-family: 'Poppins';
    color: var(--dark-gray);
    font-size: 16px;
    font-weight: 500;
    height: 20px;
    display: block;
    position: relative;
}
`;

const NewsContainer = styled.section`
    margin: 2vh auto;
    width: 97%;
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;

`;

const NewsCard = styled.div`
    border-radius: 8px;
    width: 10vw;
    height: 30vh;
    margin: 0 1vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    box-shadow: 2px 2px 10px 2px var(--dark-white-border);
`;

const CardImage = styled.img`
    border-radius: 5px 5px 0 0;
    width: 10vw;
    height: 15vh;
`;

const CardParagraph = styled.p`
    padding: 5px;
    font-size: 13px;
    font-family: 'Poppins';
    color: var(--gray-text);
    font-weight: 500;
    `;

const CardHeadTitle = styled.h4`
    padding: 5px;
    margin-bottom: -10px;
    font-size:13px;
    font-family: 'Poppins';
    color: #ee720c;
    font-weight: 400;
`;

export default function News () {
    return (
        <MainContainer>
            <NewsContainer>
                {
                    news.map((newData) => {
                        return (
                            <NewsCard>
                                <CardImage src={newData.img}/>
                                <CardHeadTitle>Últimas notícias</CardHeadTitle>
                                <CardParagraph>{newData.title}</CardParagraph>
                            </NewsCard>
                        )
                    })
                }
            </NewsContainer>
        </MainContainer>
    )
}





