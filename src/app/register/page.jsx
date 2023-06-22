'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Register = () => {
  const session = useSession();
  console.log(session);

  return <div>register</div>;
};

export default Register;
