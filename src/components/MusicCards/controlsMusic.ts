export const play = () => {
    const player = document.getElementById('player_music') as HTMLAudioElement;
    player.play();
}

export const pause = () => {
    const player = document.getElementById('player_music') as HTMLAudioElement;
    player.pause();
}