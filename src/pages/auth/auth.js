import React from 'react';
import Form from '../../components/form/form';
import styled from 'styled-components';

const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    min-height: 800px;
    align-items: center;
    background-color: #f4f7fa;

    header{
        color: black;
        margin-bottom: 10px;
        font-weight: 400;
        color: #0297CD;
        font-size: 14px;

        span{
            font-style: italic;
            font-size: 30px;
            font-weight: 600;

            span{
                color: #FFB700;
            }
        }
    }
`

const Auth = () => {
    return (
        <AuthContainer>
            <header><span>Softc<span>o</span>m</span> Front end Assessment</header>
            <Form />
        </AuthContainer>
    )
}

export default Auth;