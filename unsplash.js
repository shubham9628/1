import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bgG1oc_ls4Wr8Z1CcDfY7VGZPT2mjeg8aHjV4z0ZDuc",
  },
});
