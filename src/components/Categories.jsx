


const Categories = () => {
    const cards = [
        { id: 1, text: "General", color: "bg-blue-500" },
        { id: 2, text: "Soccer", color: "bg-orange-500" },
        { id: 3, text: "Basketball", color: "bg-green-500" },
        { id: 4, text: "Tennis", color: "bg-teal-500" },
        { id: 5, text: "Cricket", color: "bg-purple-500" },
        { id: 6, text: "Badminton", color: "bg-pink-500" },
    ];
    return (
        <div>
            <h2 className="text-3xl font-bold mt-9 mb-2">Visit All Categories</h2>
      <p className="text-gray-600 mb-6">
        Visit to see all Categories . Our collection is always up to date . You can purchage our product without any doubt. </p>
            <div className=" flex items-center justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 ">
                    {cards.map((card) => (
                        <button
                            key={card.id}
                            className={`${card.color} text-white text-2xl font-bold flex items-center justify-center h-32 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105  transition-all`}
                           
                        >
                            {card.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;