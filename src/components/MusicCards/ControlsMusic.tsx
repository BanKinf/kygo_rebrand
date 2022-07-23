import React, { useState, useRef, useEffect} from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import './controlMusic.css'

const ControlsMusic = () => {
    //state
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)

    //refereces
    const audioPlayer = useRef() as React.RefObject<HTMLAudioElement>;

    //effects
    useEffect(() => {
        if (!audioPlayer.current) return
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
    }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);

    useEffect(() => {
        if (!audioPlayer.current) return
        audioPlayer.current.addEventListener('timeupdate', handleProgress);
        setCurrentTime(audioPlayer.current.currentTime);
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
        <audio ref={audioPlayer} src='src/assets/music/music-3.mp3'></audio>
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
            id='progressBar'
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
        {calculateTime(duration)} / {calculateTime(currentTime)}
        </Text>

    </div>
  )
}

export default ControlsMusic