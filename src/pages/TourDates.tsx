import { Box, Text } from "@chakra-ui/react";
import React from "react";

// Import Components
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
         <Text className='events__title'>SEE KYGO LIVE</Text>
         <Events />
         <Footer />
        </>
    );
};

export default TourDates;