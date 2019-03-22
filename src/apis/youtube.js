import axios from "axios";
const KEY = "AIzaSyDL5hu7PvDsX_5PEeiCS-1YYnqR0Dm1FOk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
