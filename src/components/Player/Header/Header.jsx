import "./Header.css";

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContextProviderValue } from "./../../../context/ContextProvider";

const Header = () => {
  const [{ user }] = useContextProviderValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
