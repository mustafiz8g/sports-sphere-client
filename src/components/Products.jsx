


import  { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch("http://localhost:4200/product")
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
           
            <div>
      <h2 className="text-4xl font-bold text-center mb-9 mt-9">Just For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map( product => <Product key={product._id} product = {product}></Product>)}
      </div>
    </div>
        </div>
    );
};

export default Products;