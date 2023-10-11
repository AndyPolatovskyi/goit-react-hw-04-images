import axios from 'axios';
const BASE_KEY = '38684699-073e3ca44cfac762c4f7025b5';
const BASE_URL = 'https://pixabay.com/api/';

export async function requestServer(value, page) {
    const options = {
      params: {
        key: BASE_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: false,
        page: page,
        per_page: 12,
      },
    };
    return axios.get(`${BASE_URL}`, options).then(response => response.data);
  }

  