import http from './axios.js';
const getPackagesData = () => {
  return new Promise((resolve, reject) => {
    http.get('/api/packages')
    .then(res => resolve(res.data))
    .catch(err => reject(err));
  });
}

export {
  getPackagesData
}