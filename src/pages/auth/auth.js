import React from 'react';
import Form from '../../components/form/form';
import styled from 'styled-components';

const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    min-height: 800px;
    align-items: center;
    background-color: #f4f7fa;
`

const Auth = () => {
    return (
        <AuthContainer>
            <Form />
        </AuthContainer>
    )
}

export default Auth;