// "use client";


// export default PropertyPage;

const PropertyPage = ({ params, searchParams }) => {
  return (
    <div>
      <h2>Property Page {params.id}</h2>
      <h2>Property Page Search Params {searchParams.name}</h2>
      {/* <button onClick={() => router.replace("/")}>Go Home</button> */}
    </div>
  );
};

export default PropertyPage;
