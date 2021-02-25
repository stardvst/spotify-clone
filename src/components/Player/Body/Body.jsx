import "./Body.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Header from "./../Header/Header";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SongRow from "./SongRow/SongRow";
import { useContextProviderValue } from "./../../../context/ContextProvider";

const Body = () => {
  const [{ discover_weekly }] = useContextProviderValue();

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
