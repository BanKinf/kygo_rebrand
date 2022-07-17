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
        img: 'src/assets/images/sliderImg/sliderMusic.jpg',
    },
    {
        href: '/news',
        img: 'src/assets/images/sliderImg/sliderMusic.jpg',
    },
    {
        href: '/social',
        img: 'src/assets/images/sliderImg/sliderMusic.jpg',
    },
    {
        href: '/biography',
        img: 'src/assets/images/sliderImg/sliderMusic.jpg',
    },
]

const Slider = () => {
    const {pathname} = useLocation()

  return (
    <header className='slider__container'>
        <div className="slider__image">
            <Image src="src/assets/images/sliderImg/sliderMusic.jpg" alt='sliderImg' />
        </div>
    </header>
  )
}

export default Slider