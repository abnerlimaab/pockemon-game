import styled from "styled-components";

export const Container = styled.main`
    background-image: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 40%, rgba(0,212,255,1) 100%);
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const CardsContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;

    gap: 1rem;
`;