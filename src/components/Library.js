import LibrarySong from './LibrarySong';

const Library = ({ songs }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="hr-line"></div>
            <div className="library-songs">
                {songs.map(song => {
                    return <LibrarySong song={song} />;
                })}
            </div>
        </div>
    );
};

export default Library;
