import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";



const Details = () => {
    const data = useLoaderData();
    const {image, itemName, category, price, description, customization, rating, processingTime, quantity, userEmail, userName} = data;
    return (
        <div>
            <Navbar></Navbar>
               Detail Section
               {description}
               <p>aaaaaaaaaaaaa {itemName}</p>
               <p>aaaaaaaaaaaaa {price}</p>
               <p>aaaaaaaaaaaaa {category}</p>
               <p>aaaaaaaaaaaaa</p>
            <Footer></Footer>
        </div>
    );
};

export default Details;