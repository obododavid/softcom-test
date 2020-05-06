import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './style';

const Button = ({ children, disabled, handleOnClick }) => {
    return (
        <ButtonContainer disabled={disabled} onClick={handleOnClick}>
            {children}
        </ButtonContainer>
    )
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleOnClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    disabled: true
}


export default Button;