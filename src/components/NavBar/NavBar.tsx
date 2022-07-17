import React from 'react'
import { Button, Image, Text } from '@chakra-ui/react'
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
            <Image src='src/assets/images/logo.png' alt='logo' />
        </div>
        <div className='nav__links'>
          {LINKS.map((link)=>(
            <Link key={link.href} to={link.href}>
              <Text 
                color={pathname === link.href ? 'primary' : 'inherit'}
              >
                {link.text}
              </Text>
            </Link>
          ))}
        </div>
        <div className='nav__buttons'>
            <button className='button__nav'>PALM TREE CREW</button>
            <button className='button__nav'>X BY KYGO</button>
        </div>
    </nav>
  )
}

export default NavBar