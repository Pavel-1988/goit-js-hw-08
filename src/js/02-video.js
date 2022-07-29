
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

 function onPlay ({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
    
};

player.on('timeupdate', throttle(onPlay, 1000)); 
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

