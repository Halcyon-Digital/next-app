import axios from 'axios';

// get all products
export const getAllPhotos = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos`
  );

  return data;
};
