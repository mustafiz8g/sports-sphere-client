
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import Swal from "sweetalert2";

const MyEquiCard = ({ equi, equis, setEquis }) => {
  const { user } = useContext(AuthContext);
  const { _id, itemName, category, price, description, rating, processingTime, quantity, userEmail, userName } = equi;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4200/equi/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = equis.filter((item) => item._id !== _id);
              setEquis(remaining); 
              Swal.fire({
                title: "Deleted!",
                text: "This item has been deleted.",
                icon: "success"
              });
            }
          })
          .catch((err) => console.error("Error deleting item:", err));
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      {user.email === userEmail && (
        <div className="border-red-600 border mt-4">
          <p>Category: {category}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Item Name: {itemName}</p>
          <p>Description: {description}</p>
          <p>Rating: {rating}</p>
          <p>Processing Time: {processingTime}</p>
          <p>User: {userName}</p>
          <div className="flex gap-3 mt-4 space-x-2">
            <button className="btn btn-outline btn-info btn-sm w-10">
              <AiFillEye />
            </button>
            <Link to={`/updateEqui/${_id}`}>
              <button className="btn btn-outline btn-warning btn-sm">
                <AiFillEdit />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error btn-sm"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEquiCard;
