import axios from './axios';

class Api {
  baseUrl = process.env.REACT_APP_API_BASE_URL;
  // base URL is read from the REACT_APP_API_BASE_URL from .env

  makeUrl(path) {
    return `${this.baseUrl}${path}`;
  }

  async request({ path = '', options = {}, customConfig = {} }) {
    const config = {
      url: this.makeUrl(path),
      method: options.method,
      data: options.body,
      headers: {
        Accept: 'application/json',
      },
      ...customConfig,
    };
    try {
      const res = await axios.getInstance({})(config);
      return res;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  }

  get({ path, options = {}, customConfig }) {
    return this.request({ path, options: { method: 'get', ...options }, customConfig });
  }

  post({ path, body, customConfig }) {
    return this.request({ path, options: { method: 'post', body }, customConfig });
  }

  put({ path, body, customConfig }) {
    return this.request({ path, options: { method: 'put', body }, customConfig });
  }

  delete({ path, options }) {
    return this.request({ path, options: { method: 'delete', ...options } });
  }
}

const api = new Api();

export default api;
