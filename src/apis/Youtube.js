import axios from 'axios';

const KEY = 'AIzaSyD9jZLaMR8afBv5dt5DhyJTsCMhnNLbB6E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxresults: 5,
        key: KEY
    }
});