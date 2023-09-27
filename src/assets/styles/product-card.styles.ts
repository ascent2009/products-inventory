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
    position: relative;
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
        width: 100%;
        margin: 2rem auto;
        align-self: center;
        overflow-wrap: break-word;
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
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: white;
    font-size: 14px;
    border-radius: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    &:active {
        transform: translateY(2px);
    }
`;

export const SDeleteButton = styled(SButton)`
    position: absolute;
    right: 1rem;
    top: 2rem;
    background: none;
`;
