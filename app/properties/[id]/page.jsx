"use client";

import { useParams, useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <div>
      <h2>Property Page {params.id}</h2>
      {/* <button onClick={() => router.replace("/")}>Go Home</button> */}
    </div>
  );
};

export default PropertyPage;

// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const router = useRouter();

//   const handleLogin = () => {
//     // Replace current route in history (can't go back to login)
//     router.replace('/dashboard');
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }
