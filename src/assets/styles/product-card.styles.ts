import styled from 'styled-components';

export const SContainer = styled.section`
    text-align: center;
    margin: auto;
    width: 90%;
`;

export const SHeading = styled.h3`
    text-align: center;
    margin: 4rem;
`;

export const SCardWrap = styled.article`
    display: flex;
    justify-content: space-between;
    border: 1px dashed grey;
    border-radius: 15px;
    padding: 3rem;
`;

export const SImageWrap = styled.div`
    width: 30%;
    height: 30%;
    align-self: center;
`;

export const SContentWrap = styled.div`
    display: flex;
    // flex-wrap: wrap;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    text-align: left;
    h4 {
        color: blue;
        width: 100%;
        margin: auto;
        // align-self: center;
    }
    p {
        // width: 100%;
        margin: 2rem auto;
        align-self: center;
    }
`;

export const SPrice = styled.div`
    // width: 30%;
    // margin-bottom: 6.5rem;
    align-self: center;
    font-size: 20px;
    font-weight: bold;
`;

export const SButton = styled.button`
    width: 6rem;
    align-self: flex-end;
    background: blue;
    color: white;
    border-radius: 15px;
    outline: none;
    border: none;
    &:active {
        transform: translateY(2px);
    }
`;
