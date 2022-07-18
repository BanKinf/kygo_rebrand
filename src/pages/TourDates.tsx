import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider/Slider";

interface Props {}

const TourDates: React.FC<Props> = () => {
    return (
        <>
         <NavBar />
         <Slider />
        </>
    );
};

export default TourDates;