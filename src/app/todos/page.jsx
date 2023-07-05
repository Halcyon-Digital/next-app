'use client';

import { getPhotos } from '@/redux/features/photos/photo-slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
const Cart = dynamic(() => import('@/components/Cart'));

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const { photos, isSuccess } = useSelector((state) => state.photo);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4">
      {isSuccess ? (
        photos.slice(0, 300).map((item) => <Cart key={item.id} item={item} />)
      ) : (
        <div class="spinner"></div>
      )}
    </div>
  );
};

export default Todo;
