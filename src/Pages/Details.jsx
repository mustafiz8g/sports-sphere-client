
import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Fade } from "react-awesome-reveal";

const ProductDetail = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    const data = useLoaderData();
    const {
        image,
        itemName,
        category,
        price,
        description,
        customization,
        rating,
        processingTime,
        quantity,
        userEmail,
        userName,
    } = data;

    return (
      <Fade>
          <div className=" bg-gray-50  px-4">
           
            
                 <Navbar></Navbar>
              
  
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <button onClick={handleBack} className="btn btn-secondary btn-sm">Back</button>
                {/* Image and Basic Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Product Image */}
                    <div className="flex items-center justify-center p-6 bg-gray-100">
                        <img
                            src={image}
                            alt={itemName}
                            className="rounded-lg object-cover h-80 w-80"
                        />
                    </div>
                    {/* Product Details */}
                    <div className="p-6">
                        <h2 className="text-3xl font-bold mb-4">{itemName}</h2>
                        <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
                        <p className="text-2xl text-red-500 font-semibold mb-4">${price}</p>
                        <p className="text-gray-700 mb-4">{description}</p>

                        {/* Customization Options */}
                       
                            <div className="mb-4">
                                <h3 className="font-bold text-lg mb-2">Customization:</h3>
                              {customization}
                            </div>
                     

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                            <p className="text-lg font-bold mr-2">Rating:</p>
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <input
                                        key={i}
                                        type="radio"
                                        name="rating"
                                        className="mask mask-star bg-orange-500"
                                        defaultChecked={i + 1 === Math.round(rating)}
                                      
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="badge badge-outline">
                                Processing Time: {processingTime} days
                            </div>
                            <div className="badge badge-outline">Quantity: {quantity}</div>
                        </div>

                        {/* User Info */}
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">Sold by: {userName}</p>
                            <p className="text-sm text-gray-600">Contact: {userEmail}</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center items-center gap-4 p-6 border-t border-gray-200 bg-gray-50">
                    <button className="btn btn-primary w-full md:w-auto">Add to Cart</button>
                    <button className="btn btn-outline btn-secondary w-full md:w-auto">
                        Buy Now
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
      </Fade>
    );
};

export default ProductDetail;
