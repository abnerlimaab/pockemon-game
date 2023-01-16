import styled from "styled-components";

interface ContainerProps {
    show: boolean;
}

export const Container = styled.div<ContainerProps>`
    transform-style: preserve-3d;    	
    width: 10rem;
    height: 14rem;
    perspective: 1000;

    transition: 0.6s;
    transform: rotateY(${({ show }) => show ? 180 : 0}deg);
    
    &:hover {
        
        transform: rotateY(${({ show }) => show ? 180 : 0}deg) scale(${({ show }) => show ? 1 : 1.2});
    }
`;

export const Flipper = styled.div`
    transform-style: preserve-3d;    	
    transform: rotateY(180deg);
    transition: 0.6s;  	
    position: relative; 
`;


export const Back = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 10rem;
    height: 14rem;

    backface-visibility: hidden;    	
    position: absolute;  	
    top: 0;  	
    left: 0; 

    z-index: 2;
`;

export const Front = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 10rem;
    height: 14rem;

    backface-visibility: hidden;    	
    position: absolute;  	
    top: 0;  	
    left: 0; 

    transform: rotateY(180deg);
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Image = styled.img`
    height: 10rem;
    width: 8rem;
`;

export const PokeBallImage = styled.img`
    height: 8rem;
    width: 8rem;

    filter: grayscale(100%);

    transition: 0.5s;

    &:hover {
        filter: drop-shadow(0px 0px 0.3rem #000);
        filter: grayscale(0%);
        cursor: pointer;
    }
`;