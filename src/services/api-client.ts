import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "6837b07143114b7ab8cfd780f305a4e6",
  },
});
