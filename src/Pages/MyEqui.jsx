

import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MyEquiCard from "./MyEquiCard";
import { VscEmptyWindow } from "react-icons/vsc";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyEqui = () => {
  const { user } = useContext(AuthContext);
  const loggedEmail = user.email;

  const [equis, setEquis] = useState([null]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
    fetch(`https://sports-sphere.vercel.app/equi?email=${encodeURIComponent(loggedEmail)}`)
      .then(res => res.json()
      )
      .then((data) => {
        setEquis(data); 
      })
      .catch((err) => {
        setError(err.message); 
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [loggedEmail]);
  

  if (loading)
    return (
      <div className="text-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );

  if (error) return <p>Error: {error}</p>;
  

  return (
    <div>
        <Navbar></Navbar>

       <div>
    <h2 className="text-center text-4xl font-bold mt-8 mb-8">My All Equipment</h2>

       </div>
     <div className="w-11/12 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 ">

     {
        equis.map(equi => <MyEquiCard 
            key={equi._id}
            equi={equi}
            equis={equis}
            setEquis={setEquis} 
        ></MyEquiCard>)
       }
     </div>
     <Footer></Footer>
    </div>
  );
};

export default MyEqui;





