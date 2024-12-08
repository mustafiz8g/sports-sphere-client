

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
      <Navbar />
 
       {console.log(equis)}
      <div>
        {equis.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg mt-6 mb-6">
              You do not add equipment yet. Click below to add equipment.
            </p>
            <Link
              to="/addEqui"
              title="Add Equipment"
              className="link link-secondary text-8xl  mb-6"
            >
              <VscEmptyWindow />
            </Link>
          </div>
        ) : (
          equis.map((equi) => (
            <MyEquiCard
              key={equi._id}
              equi={equi}
              equis={equis}
              setEquis={setEquis} 
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyEqui;





