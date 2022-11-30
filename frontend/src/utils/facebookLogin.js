import axios from "axios";
import { useNavigate } from "react-router-dom";

const facebookLogin = async (accesstoken) => {
  return await axios
    .post("http://127.0.0.1:8000/auth/convert-token", {
      token: accesstoken,
      backend: "facebook",
      grant_type: "convert_token",
      client_id:
        "996195593239-8q2ak5oosevbhb84injh9diki59327lc.apps.googleusercontent.com",
      client_secret: "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",
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
