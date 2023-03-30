import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 5XQI7ri7tQWSLeldOjj4taRYrJsVeh9h29oFOL-k4QM',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
