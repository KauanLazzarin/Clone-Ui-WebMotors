import styled from 'styled-components';

const LastSearchContainer = styled.div`
    width: 90%;
    margin-top: 3vh;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    align-self: flex-start;
`;

const LastSearchHeader = styled.h2`
    font-size: 17px;
    font-family: 'Poppins';
    color: var(--dark-gray);
    align-self: flex-start;
    font-weight: 500;
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const LastSearchCard = styled.div`
    width: 8vw;
    margin-top: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border-radius:8px;
    margin-right: 10px;
`;

const CardHeader = styled.header`
    width: 100%;
    padding: 10px 0;
    border-radius: 5px 5px 0 0;
    background-color: var(--dark-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const CardHeaderSmall = styled.small`
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 300;
    color: white;
`;

const CardHeaderStrong = styled.strong`
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 600;
    color: white;
`;

const CardBody = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-left: 1px solid var(--dark-gray);
    border-right: 1px solid var(--dark-gray);
    border-bottom: 1px solid var(--dark-gray);
    border-radius: 0 0 5px 5px;
`;

const CardBodyText = styled.p`
    padding: 3px 20px;
    border: 1px solid var(--small-text);
    border-radius: 20px;

    font-family: 'Poppins';
    color: var(--small-text);
    font-weight: 300;
    font-size: 12px;
`;

export default function LastSearch ( {lastSearchs} ) {
    return (
        <LastSearchContainer>
            <LastSearchHeader>Suas últimas buscas</LastSearchHeader>
            <CardContainer>

                {
                    lastSearchs.map((search) => {
                        return (
                            <LastSearchCard>
                                <CardHeader>
                                    <CardHeaderSmall>{search.brand}</CardHeaderSmall>
                                    <CardHeaderStrong>{search.model}</CardHeaderStrong>
                                </CardHeader>
            
                                <CardBody>
                                    <CardBodyText>{search.state}</CardBodyText>
                                </CardBody>
                            </LastSearchCard>
                        )
                    })
                }

            </CardContainer>
        </LastSearchContainer>
    )
};