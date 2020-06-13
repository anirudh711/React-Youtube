import axios from 'axios';
const KEY='AIzaSyCwBxIf4qjNEGvRbWYuX0whgkUdv5oj5Q0';
export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
  };


export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',


})
