import Image from 'next/image';
import Link from 'next/link';

const Cart = ({ item }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/blog/${item.id}`}>
        <Image src={item.url} alt="product" width={400} height={400} />
      </Link>
      <div>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default Cart;
