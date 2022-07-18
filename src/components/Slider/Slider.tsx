import React from 'react'
import { Image, Text } from '@chakra-ui/react'
import {  useLocation } from 'react-router-dom';
import './slider.css'

interface SliderImg {
    href: string;
    img: string;
}

const imgLink: SliderImg[] = [
    {
        href: '/',
        img: 'src/assets/images/sliderImg/sliderMusic.jpg',
    },
    {
        href: '/tour-dates',
        img: 'src/assets/images/sliderImg/sliderTour-Dates.jpg',
    },
    {
        href: '/videos',
        img: 'src/assets/images/sliderImg/sliderVideos.jpg',
    },
    {
        href: '/news',
        img: 'src/assets/images/sliderImg/sliderNews.jpg',
    },
    {
        href: '/social',
        img: 'src/assets/images/sliderImg/sliderSocial.jpg',
    },
    {
        href: '/biography',
        img: 'src/assets/images/sliderImg/sliderBiography.jpg',
    },
]

const Slider = () => {
    const {pathname} = useLocation()

    const Element = imgLink.filter(
        element => pathname === element.href)
    
    console.log(Element)
    return (
        <div className='slider__container'>
            <div className='slider__image'>
                <Image src={Element[0].img} alt='sliderImg' />
            </div>
        </div>
    )
}

export default Slider