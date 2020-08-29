import axios from 'axios';
const baseUrl = process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:8000' : 'https://whispering-shore-37649.herokuapp.com'

const http = axios.create({
  baseURL: baseUrl
});

export default http;