import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    min-height: 700px;
    align-items: center;
    font-size: 50px;
    color: #0297CD;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <h1>Welcome to Softcom!</h1>
        </DashboardContainer>
    )
}

export default Dashboard;