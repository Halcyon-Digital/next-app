'use client';

import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

const fetcher = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  return data;
};

const CommentDetails = ({ params }) => {
  const { data, error } = useSWR('users', () => fetcher(params.slug));
  console.log(data);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.email}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default CommentDetails;
