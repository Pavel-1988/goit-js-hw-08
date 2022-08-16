
import throttle from 'lodash.throttle'

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

 function onPlay ({seconds}) {
    localStorage.setItem(STORAGE_KEY, seconds);
    
};

player.on('timeupdate', throttle(onPlay, 1000)); 
player.setCurrentTime(localStorage.getItem(STORAGE_KEY))

