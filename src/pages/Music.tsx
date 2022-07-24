import { Text } from "@chakra-ui/react";
import React from "react";
import "./css/music.css";

// Import Components
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider/Slider";
import News from "../components/News/News";
import MusicCards from "../components/MusicCards/MusicCards";
import Redes from "../components/Redes/Redes";

const Music: React.FC = () => {
    return (
        <>
         <NavBar />
         <Slider />
         <div className="news__container">
            <Text fontFamily="scroll_font" color="text_color" className="news__text">
                LATEST NEWS
            </Text>
            <News />
         </div>
         <div className="music__container">
            <Text fontFamily="scroll_font" color="text_color" className="music__text" fontWeight="light">
                MUSIC
            </Text>
            <MusicCards />
            <Redes />
         </div>
        </>
    );
};

export default Music;