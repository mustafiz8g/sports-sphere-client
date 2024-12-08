


const Categories = () => {
    const cards = [
        { id: 1, text: "Card 1", color: "bg-blue-500" },
        { id: 2, text: "Card 2", color: "bg-orange-500" },
        { id: 3, text: "Card 3", color: "bg-green-500" },
        { id: 4, text: "Card 4", color: "bg-teal-500" },
        { id: 5, text: "Card 5", color: "bg-purple-500" },
        { id: 6, text: "Card 6", color: "bg-pink-500" },
    ];
    return (
        <div>
            <h3 className="text-2xl font-bold text-center">This is Categories section </h3>
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