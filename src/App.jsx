import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { getLoginToken } from "./spotify";
import { removeHashFromUrl } from "./utils";
import { useContextProviderValue } from "./context/ContextProvider";
import { useEffect } from "react";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useContextProviderValue();

  useEffect(() => {
    const tokens = getLoginToken();
    removeHashFromUrl();

    const _token = tokens.access_token;
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });
      spotify.setAccessToken(_token);

      (async () => {
        const user = await spotify.getMe();
        dispatch({ type: "SET_USER", user });
      })();

      (async () => {
        const playlists = await spotify.getUserPlaylists();
        dispatch({ type: "SET_PLAYLISTS", playlists });
      })();

      (async () => {
        const discover_weekly = await spotify.getPlaylist(
          "37i9dQZEVXcNOEcOnHh3sO"
        );
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly });
      })();
    }
  }, [dispatch]);

  return (
    // BEM
    <div className="app">{token ? <Player /> : <Login />}</div>
  );
}

export default App;
