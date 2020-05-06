import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #0066f5;
    color: #fff;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    cursor: pointer;

    ${({ disabled }) => disabled && 'opacity: 0.5;cursor: not-allowed;'}
`