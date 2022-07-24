import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

//Import icons
import { IconType } from 'react-icons/lib';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { IoLogoTumblr } from 'react-icons/io';
import { RiSoundcloudFill } from 'react-icons/ri';

//Import css
import './footer.css'

interface ListLink {
    href: string;
    text: string;
}

interface RedesLink {
    href: string;
    icon: IconType;
}
  
const LINKS: ListLink[] = [
    {
      href: '/',
      text: 'MUSIC',
    },
    {
      href: '/tour-dates',
      text: 'TOUR DATES',
    },
    {
      href: '/videos',
      text: 'VIDEOS',
    },
    {
      href: '/news',
      text: 'NEWS',
    },
    {
      href: '/social',
      text: 'SOCIAL',
    },
    {
      href: '/biography',
      text: 'BIO & PHOTOS',
    },
]

const REDES: RedesLink[] = [
    {
        href: 'https://www.facebook.com/kygoofficial',
        icon: AiFillFacebook,
    },
    {
        href: 'https://twitter.com/KygoMusic',
        icon: FaTwitter,
     
    },
    {
        href: 'https://soundcloud.com/kygo',
        icon: RiSoundcloudFill,
     
    },
    {
        href: 'https://www.instagram.com/kygomusic/',
        icon: FaInstagram,
  
    },
    {
        href: 'https://kygoofficial.tumblr.com',
        icon: IoLogoTumblr,
  
    },
]

const Footer = () => {
  return (
    <Box className="footer__line" >
        <footer className='footer__container'>
            <div className='footer__text'>
                <Text fontFamily="nav_font" className='footer__copyright'>
                    © 2020 Kygo® - All rights reserved.
                </Text>
                <Box className='footer__left'>
                    <a href="https://www.sonymusic.com/privacy-policy/">
                        <Text fontFamily="nav_font">Privacy Policy / Your Privacy Rights</Text>
                    </a>
                        <Text className='footer__line__separtion'>|</Text>
                    <a href="https://www.sonymusic.com/terms-and-conditions/">
                        <Text fontFamily="nav_font">Terms and Conditions</Text>
                    </a>
                </Box>
            </div>
            <div className='footer__right'>
                <div className='footer__nav'>
                    {LINKS.map((link)=>(
                        <Link key={link.href} to={link.href}>
                        <Text
                          className='nav__item footer__item'
                          fontSize={14}
                          fontFamily="nav_font"
                        >
                          {link.text}
                        </Text>
                      </Link>
                    ))}
                    <div className='nav__buttons footer__buttons'>
                        <a className='button__nav footerNavButton' href='https://palmtreecrew.com/' target="_blank">PALM TREE CREW</a>
                        <a className='button__nav footerNavButton' href='https://xbykygo.com/?utm_medium=kygo-share&utm_source=google&utm_campaign=always-on&utm_content=kygomusic' target="_blank">X BY KYGO</a>
                    </div>
                </div>
                <div className='footer__redes'>
                    {REDES.map((redes)=>(
                        <a key={redes.href} href={redes.href} target="_blank">
                            <Icon 
                                as={redes.icon}
                                width={6}
                                height={6}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    </Box>
  )
}

export default Footer