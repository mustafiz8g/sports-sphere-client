import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MyEquiCard from "./MyEquiCard";



const MyEqui = () => {
    const equis = useLoaderData()
    
    return (
        <div>
            <Navbar></Navbar>
            {equis.length}
            
            <div>
                {
                    equis.map(equi => <MyEquiCard key={equi._id} equi = {equi}></MyEquiCard>)
                }
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MyEqui;