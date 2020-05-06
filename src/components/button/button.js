import React from 'react';
import { ButtonContainer } from './style';

const Button = ({ children, disabled, handleOnClick }) => {
    return (
        <ButtonContainer disabled={disabled} onClick={handleOnClick}>
            {children}
        </ButtonContainer>
    )
};

export default Button;