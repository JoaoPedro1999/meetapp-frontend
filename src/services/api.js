import axios from 'axios';

const api = axios.create({
  baseURL: 'http://meetupbrasil.brazilsouth.cloudapp.azure.com',
});

export default api;
