import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-cloned-react.cloudfunctions.net/api' 
  //'http://localhost:5001/cloned-react/us-central1/api'
});

export default instance;