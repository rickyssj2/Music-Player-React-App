import { useState } from 'react';
import './styles/App.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import data from './Utils';

function App() {
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="App">
            <Song currentSong={currentSong} setCurrentSong={setCurrentSong} />
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <Library songs={songs} />
        </div>
    );
}

export default App;
