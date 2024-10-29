import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "4094287caa2e4d7fb10bc2df11000ab6",
  },
});
