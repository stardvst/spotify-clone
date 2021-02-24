const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "6d8bd77b0d824414bda90f40fb6613ab";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getLoginToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((tokenValues, current) => {
      let parts = current.split("=");
      tokenValues[parts[0]] = decodeURIComponent(parts[1]);
      return tokenValues;
    }, {});
};
