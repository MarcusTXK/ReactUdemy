import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 9cc44a57a2a47e4df5e56df079c0373d2ecf8eddbd6830156536eb71ecfb59f1'
    }
});