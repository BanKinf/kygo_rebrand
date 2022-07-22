import { useEffect, useState } from 'react'
import { Image, Progress, Text } from '@chakra-ui/react';
import './controlMusic.css'

const ControlsMusic = () => {
const [isPlaying, setIsPlaying] = useState(false);

  return (
    //! Controles de Musica
    <div className='controlMusic__container'>
        <div className='controlMusic__button__container'>
            <button className='controlMusic__button' onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 
                   <Image
                    id='pauseMusic' 
                    className='controlMusic__svg' 
                    src="src/assets/svg/pause.svg" 
                    alt='pauseSvg'
                   /> : <Image
                    id='playMusic'
                    className='controlMusic__svg' 
                    src="src/assets/svg/play.svg" 
                    alt='playSvg'
                   /> 
                }
            </button>
        </div>
        <progress
            className='progress__bar'
            value={26}
            max={100}
        >
        </progress>
        <Text 
            className='controlMusic__time' 
            fontFamily="music_card_font"  
            color="white" 
            fontSize='xs'
        >
        03:23</Text>
    </div>
  )
}

export default ControlsMusic