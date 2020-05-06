import React from "react";
import { SpinnerContainer } from "./style";
import Backdrop from '../backdrop/backdrop';

const Spinner = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Spinner;
