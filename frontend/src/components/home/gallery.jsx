import React from "react";

const Gallery = () => {
  return (
    <div className="py-10 text-center">

      {/* Heading */}
        <p className="text-gray-500 font-medium">
          Share your setup with
        </p>
        <h1 className="text-4xl font-bold text-gray-800 tracking-widest">
          #FuniroFurniture
        </h1>

      {/* gallery */}
<div className="max-w-8xl mx-auto  flex flex-col-3 ">

  {/* first */}

  <div className="flex flex-col mr-3">
    <div className="flex ">

        <img src="/photos/home/gallery1.png"
      className="h-[420px] w-[130px] object-cover" alt="" />

    <img src="/photos/home/product2.png"
      className="h-[348px] w-[460px] object-cover  mt-18 ml-3" alt="" />
      </div>
      
      <div className="flex">

    <img src="/photos/home/product4.png"
      className="h-[480px] w-[300px] object-cover mt-4 " alt="" />

    <img src="/photos/home/product3.png"
      className="h-[350px] w-[290px] object-cover ml-3 mt-4 " alt="" />
      </div>
  </div>

  {/* second */}
  <div className="flex flex-col mr-3">
          <img src="/photos/home/product7.png"
      className="h-[480px] w-[300px] object-cover mt-38 " alt="" />
  </div>

  {/* third */}
    <div className="flex flex-col ">
    <div className="flex ">

        <img src="/photos/home/gallery1.png"
      className="h-[430px] w-[290px] object-cover mt-25" alt="" />

    <img src="/photos/home/inspiration1.png"
      className="h-[530px] w-[290px] object-cover   ml-3" alt="" />
      </div>
      
      <div className="flex">

    <img src="/photos/home/inspiration2.png"
      className="h-[340px] w-[250px] object-cover mt-4 " alt="" />

    <img src="/photos/home/product1.png"
      className="h-[300px] w-[280px] object-cover ml-3 mt-4 " alt="" />
      </div>
  </div>

  {/* First Row */}
  {/* <div className="flex gap-3 border">
    <img src="/photos/home/gallery1.png"
      className="h-[400px] w-[100px] object-cover" alt="" />

    <img src="/photos/home/product2.png"
      className="h-[350px] w-[490px] object-cover flex mt-12" alt="" />
    <img src="/photos/home/product2.png"
      className="h-[350px] w-[490px] object-cover mt-12" alt="" />

    <img src="/photos/home/product3.png"
      className="h-[400px] w-[250px] object-cover mt-20" alt="" />

    <img src="/photos/home/product4.png"
      className="h-[400px] w-[300px] object-cover mt-10" alt="" />

    <img src="/photos/home/product6.png"
      className="h-[480px] w-[300px] object-cover" alt="" />
      
  </div> */}

  {/* Second Row (This will come below) */}
  {/* <div className="flex  ">
    <div className="pt-1 border">

    <img src="/photos/home/product5.png"
      className="h-[480px] w-[300px] object-cover " alt="" />
      </div>

    <img src="/photos/home/product1.png"
      className="h-[480px] w-[300px] object-cover" alt="" />

    <img src="/photos/home/product7.png"
      className="h-[480px] w-[300px] object-cover" alt="" />

    <img src="/photos/home/product8.png"
      className="h-[480px] w-[300px] object-cover" alt="" />
  </div> */}

</div>
    </div>
  );
};

export default Gallery;
