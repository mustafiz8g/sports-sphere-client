import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MyEquiCard from "./MyEquiCard";
import { useState } from "react";



const MyEqui = () => {
    const loadedEquis = useLoaderData()
    const [equis, setEquis] = useState(loadedEquis);
    
    return (
        <div>
            <Navbar></Navbar>
            {equis.length}
            
            <div>
                {
                    equis.map(equi => <MyEquiCard 
                        key={equi._id} 
                        equi = {equi}
                        equis = {equis}
                        setEquis = {setEquis}
                        ></MyEquiCard>)
                }
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MyEqui;