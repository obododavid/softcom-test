import React from 'react';
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

        span{
            color: #FFB700;
        }
    }
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <h1>Welcome to Softc<span>o</span>m!</h1>
        </DashboardContainer>
    )
}

export default Dashboard;