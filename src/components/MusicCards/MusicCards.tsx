import { Box, Image, Progress } from '@chakra-ui/react';
import  ControlMusic from  './ControlsMusic';
import './musicCards.css'

interface MusicData {
  img: string;
  title: string;
  author: string;
  media: string;
  mediaHref: string;
}

const MUSIC: MusicData[] = [
  {
    img: 'src/assets/images/musicImg/music-1.png',
    title: 'Never Really Loved Me',
    author: 'Kygo, Dean Lewis',
    media: 'src/assets/music/music-1.mp3',
    mediaHref: 'https://open.spotify.com/track/1O73ZKgl0THUImkHW6dfAL?go=1&sp_cid=f33d530e69b8f39856bfb2f4cfe33ec5&utm_source=embed_player_m&utm_medium=desktop&nd=1',
  },
  {
    img: 'src/assets/images/musicImg/music-2.png',
    title: 'Freeze',
    author: 'Kygo',
    media: 'src/assets/music/music-2.mp3',
    mediaHref: 'https://open.spotify.com/track/4X66U6SUjvZqiKYIpCWXnq?go=1&sp_cid=f33d530e69b8f39856bfb2f4cfe33ec5&utm_source=embed_player_m&utm_medium=desktop&nd=1',
  },
  {
    img: 'src/assets/images/musicImg/music-3.png',
    title: 'Dancing Feet',
    author: 'Kygo, DNCE',
    media: 'src/assets/music/music-3.mp3',
    mediaHref: 'https://open.spotify.com/track/4RAR8g8fZNB106ezUurnE0?go=1&sp_cid=f33d530e69b8f39856bfb2f4cfe33ec5&utm_source=embed_player_m&utm_medium=desktop&nd=1',
  }
]

const Music = () => {
  return (
    <div className='music__cards__container'>
      <div className='music__cards'>
        {MUSIC.map((music) => (
          <div className='card__background'>
          <div className='music__card' key={music.img}>
            <div className='music__card__img'>
              <Image src={music.img} alt='musicImg' />
            </div>
            <div className='music__card__Subcontent'>
              <div className='music__card__text'>
                <Box className='music__card__title' fontFamily="music_card_font" fontWeight={600}>
                  {music.title}
                </Box>
                <Box className='music__card__author'fontFamily="music_card_font" fontWeight={300}>
                  {music.author}
                </Box>
              </div>
              <Box className='music__card__spotify'>
                  <a href={music.mediaHref}><Image className='spotify__svg' src="src/assets/svg/spotyLogo.svg" alt='spotifyLogo'/></a>
                </Box>
            </div>
          </div>
          <ControlMusic />
        </div>        
        ))}
      </div>
    </div>
  ) 
}

export default Music