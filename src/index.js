require('mediaplayer/index.css')
require('./index.css')
const MediaPlayer = require('mediaplayer/index')

function loadPlayer() {
    // get target from media with controls
    const $target = document.querySelector('video#yx');

    // assign media player from target (all these options represent the defaults)
    const player = new MediaPlayer(
        $target,
        {
            prefix: 'media',
            lang: {
                play: 'play',
                pause: 'pause',
                mute: 'mute',
                unmute: 'unmute',
                // volume: 'volume',
                currentTime: 'current time',
                remainingTime: 'remaining time',
                enterFullscreen: 'enter fullscreen',
                leaveFullscreen: 'leave fullscreen',
                download: '下载'
            },
            svgs: {
                play: '#symbol-play',
                pause: '#symbol-pause',
                mute: '#symbol-mute',
                unmute: '#symbol-unmute',
                // volume: '#symbol-volume',
                currentTime: '#symbol-currentTime',
                remainingTime: '#symbol-remainingTime',
                enterFullscreen: '#symbol-enterFullscreen',
                leaveFullscreen: '#symbol-leaveFullscreen',
                download: '#symbol-download'
            },
            timeDir: 'ltr',
            // volumeDir: 'btt'
        }
    )
}

window.addEventListener('DOMContentLoaded', () => {
    loadPlayer()
})
