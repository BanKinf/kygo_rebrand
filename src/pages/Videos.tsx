import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider/Slider";

interface Props {}

const Videos: React.FC<Props> = () => {
    return (
        <>
         <NavBar />
         <Slider />
        </>
    );
};

export default Videos;