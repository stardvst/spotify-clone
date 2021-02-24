import { useEffect } from "react";
import Login from "./components/Login/Login";
import { getLoginToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { removeHashFromUrl } from "./utils";
import { useContextProviderValue } from "./context/ContextProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useContextProviderValue();

  useEffect(() => {
    const tokens = getLoginToken();
    removeHashFromUrl();

    const _token = tokens.access_token;
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });
      spotify.setAccessToken(_token);

      (async () => {
        const user = await spotify.getMe();
        console.log(user);
        dispatch({ type: "SET_USER", user });
      })();
    }
  }, [dispatch]);

  return (
    // BEM
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
