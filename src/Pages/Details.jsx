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
            <Footer></Footer>
        </div>
    );
};

export default Details;