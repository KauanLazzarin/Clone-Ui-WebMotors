import styled from 'styled-components';
import { SearchInput, InputLabel, InputIcon} from './SearchInput';
import {SearchButton} from './SearchButton.jsx';
import SearchNavigation from './SearchNavigation';
import LastSearch from './LastSearch';

const BoxContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction:column;
    width: 56vw;
    padding: 50px 10px;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0 2px 20px 1px var(--dark-white-border) ;
    border-radius: 5px;
    transform: translateY(-4.6vh);
`;

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function SearchBox () {
    const searchs = [
        {
            brand: 'CHEVROLET',
            model: 'VECTRA',
            state: 'Rondônia'
        },

        {
            brand: 'HONDA',
            model: 'CIVIC',
            state: 'Rondônia'
        },
    ]

    return (
        <BoxContainer>
            <SearchNavigation />
                <SearchContainer>
                    <InputLabel htmlFor="search-input"> 
                        <InputIcon className="material-icons">search</InputIcon>
                        <SearchInput id="search-input" placeholder="Digite marca ou modelo de carro" />
                    </InputLabel>
                    <SearchButton>VER OFERTAS (258.756)</SearchButton>
                </SearchContainer>

                <LastSearch lastSearchs={searchs} />
        </BoxContainer>
    )
};