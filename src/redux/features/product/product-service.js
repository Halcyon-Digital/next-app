import axios from 'axios';

// get all products
export const getAllProducts = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`
  );

  return data;
};
