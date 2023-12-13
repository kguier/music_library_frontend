import MusicItem from "../MusicItem/MusicItem";
import "./MusicList.css";

const MusicList = ({ music, activeIndex, setActiveIndex }) => {
  const musicItems = music.map((song, i) => (
    <MusicItem
      key={song.title}
      title={song.title}
      artist={song.artist}
      album={song.album}
      releaseDate={song.releaseDate}
      genre={song.genre}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));

  return (
    <div className="flex-item">
      <div className="top">
        <span className="label">Title</span>
        <span className="label">Artist</span>
        <span className="label">Album</span>
        <span className="label">Release Date</span>
        <span className="label">Genre</span>
      </div>
      <div>{musicItems}</div>
    </div>
  );
};

export default MusicList;
