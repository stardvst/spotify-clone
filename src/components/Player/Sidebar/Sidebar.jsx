import "./Sidebar.css";

import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SearchIcon from "@material-ui/icons/Search";
import SidebarOption from "./SidebarOption/SidebarOption";
import { useContextProviderValue } from "./../../../context/ContextProvider";

const Sidebar = () => {
  const [{ playlists }] = useContextProviderValue();

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
        className="sidebar__logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} key={playlist.id} />
      ))}
    </div>
  );
};

export default Sidebar;
