import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const MyEquiCard = ({equi}) => {
    

    const { user } = useContext(AuthContext);

    const {image, itemName, category, price, description, customization, rating, processingTime, quantity, userEmail, userName} = equi;
    return (
        <div>
            {
               user.email == userEmail && 
               <div>
                  {category}
            {price}
            {quantity}
                </div>
            }
        </div>
    );
};

export default MyEquiCard;