import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (query, page) => {
  const {data} = await axios.get('/search/photos', {
    params: {
      client_id: 'ldWvyHjhsnBHrn9GdJc3VtwRMAfU0k_8s1SKronK3rY',
      query,
      per_page: 20,
      page: page,
      orientation: 'landscape',
    },
  });
  return data.results;
};
