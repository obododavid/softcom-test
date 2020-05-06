import React from 'react';
import { ButtonContainer } from './style';

const Button = ({ children }) => {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
};

export default Button;