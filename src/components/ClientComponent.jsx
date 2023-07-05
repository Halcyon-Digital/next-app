'use client';

// ✅ You can pass a Server Component as a child or prop of a Client Component.
export default function ClientComponent({ children }) {
  return <>{children}</>;
}
