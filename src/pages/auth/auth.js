import React from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../components/form/form';
import Spinner from '../../components/spinner/spinner';
import styled from 'styled-components';

const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    min-height: 1000px;
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
    const history = useHistory();
    const handleOnSubmit = e => {
        e.preventDefault();
        history.push('/dashboard')
    }
    return (
        <AuthContainer>
            {/* <Spinner /> */}
            <header><span>Softc<span>o</span>m</span> Front end Assessment</header>
            <Form handleOnSubmit={handleOnSubmit} />
        </AuthContainer>
    )
}

export default Auth;