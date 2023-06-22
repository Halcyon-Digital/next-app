'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Cart = dynamic(() => import('@/components/Cart'));

const BlogPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        setData(data.slice(0, 30));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Products</title>
        <meta
          name="description"
          content="Welcome to our eCommerce store! Find the best deals on a wide range of products."
        />
        <meta
          name="keywords"
          content="eCommerce, online store, products, shopping"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your eCommerce Website" />
        <meta
          property="og:description"
          content="Welcome to our eCommerce store! Find the best deals on a wide range of products."
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your eCommerce Website" />
        <meta
          name="twitter:description"
          content="Welcome to our eCommerce store! Find the best deals on a wide range of products."
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-card-image.jpg"
        />
        <meta name="twitter:creator" content="@yourusername" />
      </Head>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4">
        {data && data.map((item) => <Cart key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default BlogPost;
