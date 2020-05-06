import styled from 'styled-components';

export const BackdropContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: transform 0.25s ease-in-out;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
`;