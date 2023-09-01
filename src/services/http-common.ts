import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-type": "application/vnd.github+json",
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
