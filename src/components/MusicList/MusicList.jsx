import MusicItem from "../MusicItem/MusicItem";

const MusicList = ({ music, activeIndex, setActiveIndex }) => {
  const musicItems = music.map((song, i) => (
    <MusicItem
      key={song.title}
      title={song.title}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));

  console.log(music);

  return (
    <div>
      <h3>My Songs</h3>
      <div>{musicItems}</div>
    </div>
  );
};

export default MusicList;
