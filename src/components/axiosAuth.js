import axios from 'axios';

export const axiosAuth = () => {

   const API_URL = `https://safe-oasis-40439.herokuapp.com/posts`

   return axios.create({
    baseURL: `http://localhost:9000/posts`,
    headers: {
       "Content-Type": "application/json"
    }
  });
};

export default axiosAuth