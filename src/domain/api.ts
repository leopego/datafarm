import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://job.minhafazenda.ag/',
  timeout: 10000,
});
