import axios from 'axios';

const KEY = 'AIzaSyCQv926Km9Z45YuBS5RrDoN7TTUzqrcbwI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
        
    }
});