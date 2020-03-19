import axios from 'axios';

class AxiosSingletone {
  constructor() {
    this.instance = null;
  }

  static getInstance(options) {
    if (!this.instance && options) {
      this.instance = axios.create(options);
    }
    return this.instance;
  }
}

export default AxiosSingletone;
