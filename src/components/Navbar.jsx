'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  const { data } = useSession();

  return (
    <>
      <nav className="flex justify-between py-3 px-5 mb-4 bg-white shadow-lg ">
        <div>Logo</div>
        <div>
          <Link className=" px-4 py-2" href={'/'}>
            Home
          </Link>
          <Link className=" px-4 py-2" href={'/about'}>
            About
          </Link>
          <Link className=" px-4 py-2" href={'/blog'}>
            Blog
          </Link>
          <Link className=" px-4 py-2" href={'/todos'}>
            Contact
          </Link>
          <Link className=" px-4 py-2" href={'/products'}>
            Products
          </Link>
          <Link className=" px-4 py-2" href={'/login'}>
            Login
          </Link>

          {data?.user && (
            <Link href="/profile">
              <Image
                src={data.user.image}
                width={40}
                height={40}
                alt="profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
