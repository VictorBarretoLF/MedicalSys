import axios from "axios";

const facebookLogin = async (accesstoken) => {
  return await axios
    .post("http://127.0.0.1:8000/auth/convert-token", {
      token: accesstoken,
      backend: "facebook",
      grant_type: "convert_token",
      client_id: process.env.REACT_APP_OAUTH2_CLIENT_ID,
      client_secret: process.env.REACT_APP_OAUTH2_CLIENT_SECRET,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      alert("ERROR ao tentar entrar pelo facebook!");
      console.log(err);
    });
};

export default facebookLogin;
