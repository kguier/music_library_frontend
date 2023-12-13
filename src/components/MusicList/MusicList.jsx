import MusicItem from "../MusicItem/MusicItem";

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
    <div>
      <h3>My Songs</h3>
      <div>
        <span>Title</span>
        <span>Artist</span>
        <span>Album</span>
        <span>Release Date</span>
        <span>Genre</span>
      </div>
      <div>{musicItems}</div>
    </div>
  );
};

export default MusicList;
