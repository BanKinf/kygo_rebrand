import React from 'react'
import { Image, Text } from '@chakra-ui/react'
import "./navBar.css";
import { Link, useLocation } from 'react-router-dom';

interface ListLink {
  href: string;
  text: string;
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

const NavBar = () => {
  const {pathname} = useLocation()

  return (
    <nav className='nav__container'>
        <div className='nav__logo'>
          <Link to='/'>
            <Image src='src/assets/images/logo.png' alt='logo' />
          </Link>
        </div>
        <div className='nav__links'>
          {LINKS.map((link)=>(
            <Link key={link.href} to={link.href}>
              <Text
                className='nav__item'
                fontSize={15}
                fontFamily="nav_font"
                color={pathname === link.href ? 'primary' : 'inherit'}
              >
                {link.text}
              </Text>
            </Link>
          ))}
        </div>
        <div className='nav__buttons'>
            <a className='button__nav' href='https://palmtreecrew.com/' target="_blank">PALM TREE CREW</a>
            <a className='button__nav' href='https://xbykygo.com/?utm_medium=kygo-share&utm_source=google&utm_campaign=always-on&utm_content=kygomusic' target="_blank">X BY KYGO</a>
        </div>
    </nav>
  )
}

export default NavBar