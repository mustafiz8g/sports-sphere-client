

import React from "react";

const TrendingNow = () => {
  const products = [
    {
      name: "Color clash tee",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: "$60.00",
      image: "https://i.ibb.co.com/GM8hdxB/Screenshot-2024-12-08-132841.png", 
      discount: null,
    },
    {
      name: "Tennis rackets",
      price: "$25.00",
      originalPrice: "$50.00",
      image: "https://i.ibb.co.com/JscMky3/Screenshot-2024-12-08-133201.png", 
      discount: "-50%",
      badge: "HOT",
    },
    {
      name: "Sport bottle 800ml",
      price: "$25.00",
      image: "https://i.ibb.co.com/gMn9dVm/Screenshot-2024-12-08-132856.png", 
      discount: null,
    },
    {
      name: "Running socks",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: "$12.00",
      originalPrice: "$15.00",
      image: "https://i.ibb.co.com/wMmk32r/Screenshot-2024-12-08-133117.png",
      discount: "-20%",
    },
  ];

  return (
    <div className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-2">Trending now</h2>
      <p className="text-gray-600 mb-6">
        Discover whats rising to the top in the world of fashion, technology, and culture.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left-side  */}
        <div className="col-span-1 md:col-span-1 bg-cover bg-center rounded-lg relative overflow-hidden"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/XjS6Q7X/Screenshot-2024-12-08-133914-removebg-preview-1.png')", 
          }}>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">Tennis equipment</h3>
            <button className="mt-2 text-sm underline">More details →</button>
          </div>
        </div>

        {/* Right-side Product Cards */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg relative p-4 text-center"
            >
              {product.discount && (
                <div className="absolute top-2 left-2">
                  <span className="badge badge-error badge-sm">{product.discount}</span>
                  {product.badge && (
                    <span className="badge badge-warning badge-sm mt-1">{product.badge}</span>
                  )}
                </div>
              )}
              <img 
                src={product.image}
                alt={product.name}
                className=" mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">{product.name}</h3>
              {product.sizes && (
                <div className="mt-2">
                  {product.sizes.map((size, i) => (
                    <span
                      key={i}
                      className="badge badge-outline text-sm mr-1"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-2 text-gray-500">
                {product.originalPrice && (
                  <span className="line-through mr-2">{product.originalPrice}</span>
                )}
                <span className="text-lg font-bold text-red-500">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;



// https://ibb.co.com/096wnD8
// https://ibb.co.com/PZSjMQF
// https://ibb.co.com/dGYT1HJ
// https://ibb.co.com/LZ02pJN