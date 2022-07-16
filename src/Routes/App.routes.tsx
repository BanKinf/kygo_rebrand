import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Biography from "../pages/Biography";
import Error from "../pages/Error/Error";

// Elements 
import Music from "../pages/Music";
import News from "../pages/News";
import Social from "../pages/Social";
import TourDates from "../pages/TourDates";
import Videos from "../pages/Videos";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<Music />} path="/" />
            <Route element={<TourDates />} path="/tour-dates" />
            <Route element={<Videos />} path="/videos" />
            <Route element={<News />} path="/news" />
            <Route element={<Social />} path="/social" />
            <Route element={<Biography />} path="/biography" />
            <Route path="*" element={<Error/>} />
        </Routes>
    )
}

export default AppRoutes;