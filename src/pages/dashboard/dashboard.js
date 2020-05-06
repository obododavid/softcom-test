import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    min-height: 700px;
    align-items: center;
    color: #0297CD;
    background-color: #f4f7fa;

    h1{
        font-size: 6vw;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;

        ${({ fadeIn }) => fadeIn && 'opacity: 1'};

        span{
            color: #FFB700;
        }
    }
`;

const Dashboard = () => {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true)
        }, 1000)
    }, [])

    return (
        <DashboardContainer fadeIn={fadeIn}>
            <h1>Welcome to Softc<span>o</span>m!</h1>
        </DashboardContainer>
    )
}

export default Dashboard;