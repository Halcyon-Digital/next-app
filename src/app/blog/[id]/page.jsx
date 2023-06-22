'use client';

import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';

const fetcher = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return data;
};

const Details = ({ params }) => {
  const { data, error } = useSWR('users', () => fetcher(params.id));

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Image src={data.url} alt="new item" width={300} height={300} />
      <h4>{data.title}</h4>
      {/* <h4>{data.phone}</h4> */}
    </div>
  );
};

export default Details;
