import { Link } from "react-router-dom";



const Product = ({ product }) => {
    const {_id, image, itemName, price, customization, rating } = product;
    return (
        <div className=" bg-base-100 shadow-lg flex  justify-center items-center rounded-xl ">
            <div className="xl:flex-1 ">

                <img src={image} alt={itemName} className="xl:w-full h-full rounded-xl lg:w-[300px] object-contain" />

            </div>

            {/* Product Details */}
            <div className=" px-6 pb-6 xl:flex-1">
                <h2 className="card-title text-lg font-bold">{itemName}</h2>
                <p className="text-gray-500">{customization}</p>
                <p className="text-xl font-bold text-green-600">${price}</p>

                {/* Rating */}
                <div className="flex  space-x-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .288l2.833 8.718H24l-6.833 4.958 2.833 8.718L12 17.718 6.167 22.682l2.833-8.718L0 9.006h9.167z" />
                        </svg>
                    ))}
                </div>

                {/* Buttons */}
                <div className="card-actions flex  justify-between mt-4">
                    <Link to={`allEqui/${_id}`}>
                        <button className="btn btn-sm btn-outline btn-primary">Details</button>
                    </Link>
                    <button className="btn btn-sm btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;