import styled from 'styled-components';

export const SCreateButton = styled.button`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 4rem;
    right: 4rem;
    width: 6rem;
    height: 6rem;
    border: none;
    outline: none;
    border-radius: 50%;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    cursor: pointer;
    color: white;
    font-size: 6rem;
    // font-weight: bold;
    &:active {
        transform: translateY(2px);
    }
`;
