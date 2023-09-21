import styled from 'styled-components';

export const SList = styled.ul`
    margin: auto;
    width: 80%;
`;

export const SListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
`;

export const SImageWrapper = styled.div`
    width: 20%;
    height: 20%;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const SContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    align-items: flex-start;
    p {
        text-align: left;
    }
`;

export const SPrice = styled.p`
    font-weight: bold;
`;
