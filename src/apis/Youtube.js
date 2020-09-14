import axios from 'axios';

//this is the key provided by the youtube api for search results
//do not share key
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