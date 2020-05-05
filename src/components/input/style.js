import styled from 'styled-components';

export const Inputcontainer = styled.div`
    border: 1px solid #f2f4f7;
    border-color: rgba(10,46,101,.2);
    border-radius: 5px;
    padding: 15px;
    position: relative;

    input{
        border: none;
        font-size: 14px;
        width: 100%;
        outline: transparent;
        color: #0a2e65;

        ::placeholder{
            color: #0a2e65;
            opacity: 0.6;
        }
    }

    label{
        position: absolute;
        top: -19px;
        left: 12px;
        font-size: 12px;
        padding: 5px 5px 0 5px;
        background-color: #ffffff;
        color: rgba(0,0,0,0.4);
        opacity: 0;
        transition: all 0.5s ease-in-out;

        ${({ focus }) => focus && 'top: -12px; opacity: 1'};
    }
`