


const Product = ({ product }) => {
    const { image, itemName, price, customization, rating } = product;
    return (
        <div className="card w-80 bg-base-100 shadow-xl"> {/* প্রস্থ w-80 করা হয়েছে */}
            {/* Product Image */}
            <figure className="px-10 pt-10">
                <img src={image} alt={itemName} className="rounded-xl h-40 object-contain" />
            </figure>

            {/* Product Details */}
            <div className="card-body text-center">
                <h2 className="card-title text-lg font-bold">{itemName}</h2>
                <p className="text-gray-500">{customization}</p>
                <p className="text-xl font-bold text-green-600">${price}</p>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                                i < rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .288l2.833 8.718H24l-6.833 4.958 2.833 8.718L12 17.718 6.167 22.682l2.833-8.718L0 9.006h9.167z" />
                        </svg>
                    ))}
                </div>

                {/* Buttons */}
                <div className="card-actions flex flex-col space-y-2 mt-4">
                    <button className="btn btn-sm btn-outline btn-primary">Details</button>
                    <button className="btn btn-sm btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;