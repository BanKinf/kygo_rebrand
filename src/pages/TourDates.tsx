import React from "react";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider/Slider";

interface Props {}

const TourDates: React.FC<Props> = () => {
    return (
        <>
         <NavBar />
         <Slider />
         <Events />
         <Footer />
        </>
    );
};

export default TourDates;