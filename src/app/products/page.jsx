'use client';

import dynamic from 'next/dynamic';
const CommentCard = dynamic(() => import('@/components/CommentCard'));
import { getProducts } from '@/redux/features/product/product-slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products, isSuccess } = useSelector((state) => state.product);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {isSuccess &&
          products.map((product, i) => (
            <CommentCard key={i} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Product;
