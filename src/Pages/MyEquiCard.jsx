



import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import Swal from "sweetalert2";

const MyEquiCard = ({ equi, equis, setEquis }) => {
  const { user } = useContext(AuthContext);
  const { _id, image, itemName, category, price, description, rating, processingTime, customization, quantity, userEmail, userName } = equi;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
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
    <tr>
      <td><img src={image} alt={itemName} className="h-[80px] rounded-xl" /></td>
      <td>{itemName}</td>
      <td>{customization}</td>
      <td>${price}</td>
      <td>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718H24l-6.833 4.958 2.833 8.718L12 17.718 6.167 22.682l2.833-8.718L0 9.006h9.167z" />
            </svg>
          ))}
        </div>
      </td>
      <td>
        <div className="flex gap-3 justify-center">
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
      </td>
    </tr>
  );
};

export default MyEquiCard;
