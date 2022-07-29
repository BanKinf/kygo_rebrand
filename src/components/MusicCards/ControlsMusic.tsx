import React, { useState, useRef, useEffect} from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import './controlMusic.css'

const ControlsMusic = (media: string, mediatime: string) => {
    //state
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)

    //refereces
    const audioPlayer = useRef() as React.RefObject<HTMLAudioElement>;
    const progressBar = useRef() as React.RefObject<HTMLProgressElement>;

    //effects

    useEffect(() => {
        if (!audioPlayer.current) return
        audioPlayer.current.addEventListener('timeupdate', handleProgress);
    }
    , [])

    //functions
    const togglePlayPause = () => {
        if (!audioPlayer.current) return
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    const handleProgress = () => {
        if (!audioPlayer.current) return
        setProgress(audioPlayer.current.currentTime / audioPlayer.current.duration * 100);
        setCurrentTime(audioPlayer.current.currentTime);
        if (audioPlayer.current.ended === true) {
            setIsPlaying(false);
            setCurrentTime(0);
            setProgress(0);
        }
    }

    const calculateTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }
 
  return (
    <div className='controlMusic__container'>
        <audio ref={audioPlayer} src={media}></audio>
        <button className='controlMusic__button__container' onClick={togglePlayPause}>
            {isPlaying ? 
            <Image
            className='controlMusic__svg' 
            src="src/assets/svg/pause.svg" 
            alt='pauseSvg'
           /> : <Image
            className='controlMusic__svg' 
            src="src/assets/svg/play.svg" 
            alt='playSvg'
           />
            }
        </button>

        {/* Progress Bar */}
        <progress
            ref={progressBar}
            className='progress__bar'
            value={progress}
            max={100}
        >
        </progress>
        

        {/* Current Time */}
        <Text 
            className='controlMusic__time' 
            fontFamily="music_card_font"  
            color="white" 
            fontSize="12px"
        >
        {mediatime} / {calculateTime(currentTime)}
        </Text>
        
    </div>
  )
}

export default ControlsMusic