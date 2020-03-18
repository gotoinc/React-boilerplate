import apisauce from 'apisauce';

export const api = apisauce.create({
  // base URL is read from the REACT_APP_API_BASE_URL from .env
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // there are default headers
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const fetchUsersRequest = ({ results = 10 }) => api.get('', { results });
