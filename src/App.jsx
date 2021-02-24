import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { getLoginToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { removeHashFromUrl } from "./utils";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokens = getLoginToken();
    removeHashFromUrl();

    const _token = tokens.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      (async () => {
        const user = await spotify.getMe();
        console.log(user);
      })();
    }
  }, []);

  return (
    // BEM
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
