import styled from 'styled-components';

export const SOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

export const SModal = styled.section`
    position: fixed;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    z-index: 2;
    border: 1px grey solid;
    background-color: #ffffff;
    border-radius: 15px;
`;

export const SModalHeader = styled.div`
    position: relative;
    // height: 3rem;
    margin: 2rem auto 2.5rem;
    h3 {
        font-size: 1.5rem;
    }
`;

export const SCloseButton = styled.button`
    position: absolute;
    top: -1rem;
    right: 1rem;
    background-color: transparent;
    opacity: 0.6;
    border: none;
    cursor: pointer;
`;

export const SDeleteButton = styled(SCloseButton)`
    top: 2rem;
    right: 5rem;
`;

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 70%;
    margin: auto;
    align-items: flex-start;
    justify-content: space-around;
`;

export const SInputGroup = styled.div`
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: fit-content;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.2rem;
    color: blue;
    label {
        text-align: left;
        width: 100%;
        margin: auto auto 1rem;
        font-weight: bold;
    }
    input {
        width: 100%;
        height: 3rem;
        margin: auto;
        padding: 2rem auto;
        border-radius: 15px;
        outline: none;
        font-size: 1.2rem;
        text-indent: 1rem;
        text-overflow: ellipsis;
        &:focus {
            border: 3px solid blue;
        }
    }
`;

export const SFormButton = styled.button`
    margin: 3rem auto auto;
    height: 2.5rem;
    width: 45%;
    align-self: center;
    font-size: 1.2rem;
    border: none;
    outline: none;
    border-radius: 25px;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    cursor: pointer;
    color: white;
    &:active {
        transform: translateY(2px);
    }
`;
