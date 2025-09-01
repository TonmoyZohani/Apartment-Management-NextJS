// "use client";

// import {
//   useParams,
//   usePathname,
//   useRouter,
//   useSearchParams,
// } from "next/navigation";

// const PropertyPage = () => {
//   const router = useRouter();
//   const params = useParams();
//   const searchParams = useSearchParams();
//   const pathname = usePathname();

//   console.log("Path Name", pathname);

//   return (
//     <div>
//       <h2>Property Page {params.id}</h2>
//       <h2>Property Page Search Params {searchParams.get("name")}</h2>
//       {/* <button onClick={() => router.replace("/")}>Go Home</button> */}
//     </div>
//   );
// };

// export default PropertyPage;

const PropertyPage = ({ params, searchParams }) => {
  return (
    <div>
      <h2>Property Page {params.id}</h2>
      <h2>Property Page Search Params {searchParams.name}</h2>
      <button onClick={() => router.replace("/")}>Go Home</button>
    </div>
  );
};

export default PropertyPage;
