


import  { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch("https://sports-sphere.vercel.app/product")
          .then(res => res.json())
          .then((data) => {
            setProducts(data);
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
      

    if (loading) {
      return (
        <div className="text-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      );
    }
  

    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
        <div>
            <h3 className="text-2xl font-bold text-center">This is Product Section</h3>
            <div>
      <h2 className="text-2xl font-bold text-center mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map( product => <Product key={product._id} product = {product}></Product>)}
      </div>
    </div>
        </div>
    );
};

export default Products;