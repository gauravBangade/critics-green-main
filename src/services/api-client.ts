import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "31ca5d9f00ca48e3af08cb4055d1cb82",
  },
});
