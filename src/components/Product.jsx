import { Link } from "react-router-dom";



const Product = ({ product }) => {
    return (
        <div>
           
            <div key={product._id} className="border p-4 rounded shadow">
                <img src={product.image} alt={product.itemName} className="w-full h-48 object-cover rounded mb-2" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-500 font-bold mt-2">Price: ${product.price}</p>
                <Link to={`allEqui/${product._id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                </Link>
            </div>
         
        </div>
    );
};

export default Product;