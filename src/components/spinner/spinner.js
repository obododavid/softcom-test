import React from "react";
import { SpinnerContainer } from "./style";
import Backdrop from '../backdrop/backdrop';

const Spinner = () => {
    return (
        <>
            <Backdrop />
            <SpinnerContainer>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </SpinnerContainer>
        </>
    );
};

export default Spinner;
