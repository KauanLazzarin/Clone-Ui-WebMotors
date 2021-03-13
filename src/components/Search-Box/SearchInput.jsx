import styled from 'styled-components';

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px 20px;
    font-size: 14.5px;
    font-family: 'Poppins';
    font-weight: 500;
    color: var(--dark-text);

    &::placeholder {
        color: var(--light-text);
    }
`;

export const InputLabel = styled.label`
    border: 1px solid var(--light-border);
    box-shadow: 0.1px 0.1px  1px 1px var(--light-border);
    border-radius: 8px;
    padding: 0 20px;
    width: 80%;
    margin-left: 1vw;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const InputIcon = styled.i`
    font-size: 24px !important;
    color: black !important;
    font-weight: 500;
`;