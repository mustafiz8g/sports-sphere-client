

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

  const [equis, setEquis] = useState([]);  // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4200/equi?email=${loggedEmail}`)
      .then(res => res.json())
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
      <h2 className="text-center text-4xl font-bold mt-8 mb-8">My All Equipment</h2>
      <div className="w-11/12 mx-auto">
        <table className="table w-full table-auto border-separate border-spacing-2">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th>Customization</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {equis.map(equi => (
              <MyEquiCard 
                key={equi._id}
                equi={equi}
                equis={equis}
                setEquis={setEquis} 
              />
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default MyEqui;
