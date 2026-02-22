import React from "react";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import FeaturesBar from "../featuresBar";

const ProductComparison = () => {
    return (
        <div>
            <div className=" min-h-screen py-15">
                <div className="relative h-85 flex items-center justify-center">
                    {/* Background Image */}
                    <img
                        src="/photos/shop/banner.png"   // replace with your image path
                        alt="shop banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/60"></div>

                    {/* Text Content */}
                    <div className="relative text-center ">
                        <div className="px-40 ">

                            <img src="photos/logo.png" alt="" className='h-20 w-20    ' />
                        </div>
                        <h1 className="text-5xl font-semibold text-black mb-2 ">
                            Product Comparion
                        </h1>
                        <p className="text-sm flex px-30 items-center gap-2">
                            <span className="font-semibold">Home</span>
                            <ChevronRight size={20} className="font-semibold" />
                            <span className="font-normal">Comparison</span>
                        </p>
                    </div>
                </div>
                <div className=" min-h-screen px-16 py-12">

                    {/* TOP SECTION */}
                    <div className="grid grid-cols-4 gap-8 mb-12 items-start">

                        {/* Left Info */}
                        <div>
                            <h2 className="text-3xl font-semibold">
                                Go to Product <br /> page for more <br /> Products
                            </h2>
                            <p className="mt-4 underline cursor-pointer text-gray-600 text-xl">
                                View More
                            </p>
                        </div>

                        {/* Product 1 */}
                        <div className="max-w-md">

                            {/* Image Card */}
                            <div className="bg-[#F9F1E7] p-10 rounded-3xl">
                                <img
                                    src="/photos/home/product1.png"
                                    alt="Asgaard Sofa"
                                    className="w-full object-contain"
                                />
                            </div>

                            {/* Product Name */}
                            <h2 className="mt-3 text-2xl font-semibold">
                                Asgaard Sofa
                            </h2>

                            {/* Price */}
                            <p className=" mt-1">
                                Rs. 250,000.00
                            </p>

                            {/* Rating Section */}
                            <div className="flex items-center gap-3 mt-1">

                                {/* Rating Number */}
                                <span className=" ">
                                    4.7
                                </span>

                                {/* Stars */}
                                <div className="flex  text-yellow-500">
                                    {[...Array(4)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" stroke="none" />
                                    ))}
                                    <Star size={20} className="text-yellow-500" fill="currentColor" stroke="none" />
                                </div>

                                {/* Divider */}
                                <div className="h-6 w-px bg-gray-300"></div>

                                {/* Review Count */}
                                <span className="text-gray-400 text-sm">
                                    204 Review
                                </span>

                            </div>

                        </div>


                        {/* Product 2 */}
                        <div className="max-w-md">

                            {/* Image Card */}
                            <div className="bg-[#F9F1E7] p-10 rounded-3xl">
                                <img
                                    src="/photos/home/product1.png"
                                    alt="Asgaard Sofa"
                                    className="w-full object-contain"
                                />
                            </div>

                            {/* Product Name */}
                            <h2 className="mt-3 text-2xl font-semibold">
                                Outdoor Sofa Set
                            </h2>

                            {/* Price */}
                            <p className=" mt-1">
                                Rs. 224,000.00
                            </p>

                            {/* Rating Section */}
                            <div className="flex items-center gap-3 mt-1">

                                {/* Rating Number */}
                                <span className=" ">
                                    4.2
                                </span>

                                {/* Stars */}
                                <div className="flex  text-yellow-500">
                                    {[...Array(4)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" stroke="none" />
                                    ))}
                                    <Star size={20} className="text-yellow-500" fill="currentColor" stroke="none" />
                                </div>

                                {/* Divider */}
                                <div className="h-6 w-px bg-gray-300"></div>

                                {/* Review Count */}
                                <span className="text-gray-400 text-sm">
                                    145 Review
                                </span>

                            </div>

                        </div>

                        {/* Add Product */}

                        <div className="pt-16 ml-10">
                            <h3 className="font-bold text-2xl mb-3">Add A Product</h3>

                            <div className="relative w-full">
                                <select
                                    className="bg-[#B88E2F] text-white px-4 py-3 pr-10 rounded-lg w-full border-none outline-none focus:ring-0 appearance-none cursor-pointer">
                                    <option className="text-black bg-yellow-100">
                                        Choose a Product
                                    </option>
                                    <option className="text-black bg-yellow-100">
                                        Asgaard Sofa
                                    </option>
                                    <option className="text-black bg-yellow-100">
                                        Outdoor Sofa
                                    </option>
                                </select>

                                {/* Custom Arrow */}
                                <ChevronDown
                                    size={20}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* COMPARISON TABLE */}
                    <div className="grid grid-cols-3 pr-100  border-t   border-gray-300">

                        {/* LEFT LABEL COLUMN */}
                        <div className="border-r   border-gray-300 px-1 py-15 ">

                            {/* General */}
                            <div className="mb-14">
                                <h3 className="font-semibold text-4xl mb-6">General</h3>
                                <div className="space-y-5 text-xl ">
                                    <p className="">Sales Package</p>
                                    <p className=" pt-8">Model Number</p>
                                    <p className=" pt-4">Secondary Material</p>
                                    <p className=" ">Configuration</p>
                                    <p className=" pt-2">Upholstery Material</p>
                                    <p className=" ">Upholstery Color</p>
                                </div>
                            </div>

                            {/* Product */}
                            <div className="mb-14">
                                <h3 className="font-semibold text-4xl mb-6">Product</h3>
                                <div className="space-y-5 text-xl">
                                    <p className=" pt-7">Filling Material</p>
                                    <p className=" ">Finish Type</p>
                                    <p className="">Adjustable Headrest</p>
                                    <p className="">Maximum Load <br />Capacity</p>
                                    <p className=" pt-1">Origin of Manufacture</p>
                                </div>
                            </div>

                            {/* Dimensions */}
                            <div className="mb-14">
                                <h3 className="font-semibold text-4xl mb-6">Dimensions</h3>
                                <div className="space-y-5 text-xl">
                                    <p className=" pt-7">Width</p>
                                    <p className="">Height</p>
                                    <p className="">Depth</p>
                                    <p className="">Weight</p>
                                    <p className="">Seat Height</p>
                                    <p className="">Leg Height</p>
                                </div>
                            </div>

                            {/* Warranty */}
                            <div>
                                <h3 className="font-semibold text-4xl mb-6">Warranty</h3>
                                <div className="space-y-5 text-xl">
                                    <p className=" ">Warranty Summary</p>
                                    <p className="  pt-4">Warranty Service Type</p>
                                    <p className="  pt-29">Covered in Warranty</p>
                                    <p className="  pt-25">Not Covered in Warranty</p>
                                    <p className="  pt-44">Domestic Warranty</p>
                                </div>
                            </div>

                        </div>

                        {/* PRODUCT 1 */}
                        <div className="border-r border-gray-300 px-10 py-18 text-xl ">

                            <div className="mb-14  space-y-5 ">
                                <div className="invisible mb-6">General</div>
                                <div>
                                    <p className="">1 sectional sofa</p></div>
                                <div className="pt-3 ">
                                    <p className="pt-5">TFCBLIGRBL6SRHS</p></div>

                                <div className="">
                                    <p className=" pt-3">Solid Wood</p></div>
                                <p className="">L-shaped</p>
                                <p className=" pt-2">Fabric + Cotton</p>
                                <p className="">Bright Grey & Lion</p>
                            </div>

                            <div className="mb-14 space-y-5 py-3 ">
                                <div className="invisible mb-6">Product</div>
                                <p className=" pt-7">Foam</p>
                                <p className="">Bright Grey & Lion</p>
                                <p className="">No</p>
                                <p className="">280 KG</p>
                                <p className="pt-8 ">India</p>
                            </div>

                            <div className=" space-y-5  py-5 ">
                                {/* <div className="invisible ">Dimensions</div> */}
                                <p className="pt-15 " >265.32 cm</p>
                                <p className="">76 cm</p>
                                <p className="">167.76 cm</p>
                                <p className="">45 KG</p>
                                <p className="">41.52 cm</p>
                                <p className="">5.46 cm</p>
                            </div>

                            <div className="space-y-5 py-12 px-4 ">
                                <div className="invisible mb-4">Warranty</div>
                                <p className="  ">1 Year Manufacturing Warranty</p>
                                <p className="">
                                    For Warranty Claims or <br />Any Product Related <br /> Issues
                                    Please Email at operations@trevifurnitu re.com
                                </p>

                                <p className="">Warranty Against Manufacturing Defect</p> <br /> <br />
                                <p className=" pt-4">
                                    The Warranty Does Not  Cover Damages Due To Usage Of
                                    The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.
                                </p>
                                <p className=" pt-2">1 Year</p>

                                <div className="">
                                    <button className="mt-8 bg-[#B88E2F] text-white px-12 py-3 text-lg  ">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* PRODUCT 2 */}
                        <div className="px-10 py-12 text-xl border-r border-gray-300 ">

                            <div className="mb-14 space-y-5">
                                {/* <div className="invisible mb-6 ">General</div> */}
                                <p className="  pt-17">1 Three Seater, 2 Single Seater</p>
                                <p className="  pt-3">DTUBLIGRBL568</p>
                                <p className="pt-2 ">Solid Wood</p>
                                <p className="pt-1 ">L-shaped</p>
                                <p className="pt-2 ">Fabric + Cotton</p>
                                <p className="">Bright Grey & Lion</p>
                            </div>

                            <div className="mb-14 space-y-5">
                                <div className="invisible mb-6">Product</div>
                                <p className=" pt-10">Matte</p>
                                <p className="">Bright Grey & Lion</p>
                                <p className="">Yes</p>
                                <p className=" ">300 KG</p>
                                <p className=" pt-8">India</p>
                            </div>

                            <div className="mb-14 space-y-5">
                                <div className="invisible mb-6">Dimensions</div>
                                <p className="pt-10 ">265.32 cm</p>
                                <p>76 cm</p>
                                <p>167.76 cm</p>
                                <p>65 KG</p>
                                <p>41.52 cm</p>
                                <p>5.46 cm</p>
                            </div>

                            <div className="space-y-5">
                                <div className="invisible mb-6">Warranty</div>
                                <p className=" pt-1">1.2 Year Manufacturing Warranty</p>
                                <p className=" pt-2">
                                    For Warranty Claims or <br /> Any Product Related <br /> Issues
                                    Please Email at support@xyz.com
                                </p>
                                <p className=" pt-5">Warranty of the product <br /> is limited to <br /> manufacturing defects <br /> only.</p>
                                <p className=" pt-6">
                                    The Warranty Does Not Cover Damages Due To Usage Of
                                    The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of <br /> Product Usage.
                                </p>
                                <p className="pt-2 ">3 Months</p>

                                <div className="">
                                    <button className="mt-8 bg-[#B88E2F] text-white px-12 py-3 text-lg  ">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <FeaturesBar />
        </div>
    );
};

export default ProductComparison;