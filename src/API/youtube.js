import axios from 'axios';
const KEY = 'AIzaSyCjQrWoXXd7doFOEI-kNctRjXGvDcADhAI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 25,
        key: KEY
    }
})