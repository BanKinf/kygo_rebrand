import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import './news.css'

interface CardsInfo {
    img: string;
    date: string;
    description: string;
    subDescription: string;
}

const CARDS: CardsInfo[] = [
    {
        img: 'src/assets/images/news/news-1.jpg',
        date: 'JUL 05',
        description: "Kygo's Ullevaal Concert: historically highest number of tickets ever sold at a Norway concert",
        subDescription: '- This concert really meant a lot to me, says Kygo.'
    },
    {
        img: 'src/assets/images/news/news-2.jpg',
        date: 'JUL 01',
        description: "'Never Really Loved Me' just dropped",
        subDescription: 'Click to access and listen.',
    },
    {
        img: 'src/assets/images/news/news-3.jpg',
        date: 'JUL 21',
        description: "Kygo is coming to Madison Square in October",
        subDescription: 'Kygo is excited to announce he will be playing in New York on October 6.'
    }
]

const News = () => {
  return (
    <div className='cards__container'>
            {CARDS.map((card)=>(
                <div className='card__container' key={card.img}>
                    <div className='card__img'>
                        <Image src={card.img} alt='newsImg' />
                    </div>
                    <div className='card__text'>
                        <Box fontFamily="card_font" fontWeight={600} color="date_color" className='card__date'>
                            {card.date}
                        </Box>
                        <Box color="description_color" fontWeight={600} fontFamily="card_font" className='card__description'>
                            {card.description}
                        </Box>
                        <Box className='card__subDescription' fontFamily="card_font" fontWeight={300}>
                            {card.subDescription}
                        </Box>
                    </div>
                    <Box className='card_button__container' fontSize={20} fontFamily="nav_font" color="primary">
                        <Link className='card__button' to='/news'>READ MORE</Link>
                    </Box>
                </div>  
            ))}
    </div>
  )
}

export default News