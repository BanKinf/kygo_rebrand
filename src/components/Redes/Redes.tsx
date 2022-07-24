import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import './redes.css'

interface RedesIcon {
    img: string;
    redesHref: string;
}
  

const REDES: RedesIcon[] = [
    {
      img: 'src/assets/images/redes/appleMusic.png',
      redesHref: 'https://music.apple.com/no/artist/kygo/635806094'
    },
    {
      img: 'src/assets/images/redes/spotify.png',
      redesHref: 'https://open.spotify.com/artist/23fqKkggKUBHNkbKtXEls4'
    },
    {
      img: 'src/assets/images/redes/tidal.png',
      redesHref: 'https://tidal.com/browse/artist/5891908'
    },
    {
      img: 'src/assets/images/redes/soundCloud.png',
      redesHref: 'https://soundcloud.com/kygo'
    }
]

const Redes = () => {
  return (
    <div className='redes__container'>
        {REDES.map((redes) => (
            <div className='redes__icons' key={redes.img}>
                <a href={redes.redesHref} target='_blank'><Image className='redes__icon' src={redes.img} alt='redes' /></a>
                <Box background="primary" className='redes__circles'></Box>
            </div>
        ))}
    </div>
  )
}

export default Redes