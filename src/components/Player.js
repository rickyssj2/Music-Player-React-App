import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faAngleRight,
    faAngleLeft,
    faPause,
} from '@fortawesome/free-solid-svg-icons';

function Player({ currentSong, isPlaying, setIsPlaying }) {
    //audioRef
    const audioRef = useRef(null);
    const audioEl = audioRef.current;
    //Handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioEl.pause();
            setIsPlaying(false);
        } else {
            audioEl.play();
            setIsPlaying(true);
        }
    };
    const timeUpdateHandler = e => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, current: current, duration: duration });
    };
    const dragHandler = e => {
        audioEl.currentTime = e.target.value;
        setSongInfo({ ...songInfo, current: e.target.value });
    };
    //Function
    const formatTime = time => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        const value = min + ':' + `0${sec}`.slice(-2);
        return value;
    };
    //State
    const [songInfo, setSongInfo] = useState({
        current: 0,
        duration: 0,
    });
    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.current)}</p>
                <input
                    min="0"
                    max={songInfo.duration}
                    value={songInfo.current}
                    onChange={dragHandler}
                    type="range"
                />
                <p>{formatTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    className="AngleLeft"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay}
                    onClick={playSongHandler}
                />
                <FontAwesomeIcon
                    className="AngleRight"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </div>
    );
}

export default Player;
