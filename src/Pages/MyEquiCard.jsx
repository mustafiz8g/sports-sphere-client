import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import Swal from "sweetalert2";



const MyEquiCard = ({ equi, equis, setEquis }) => {


    const { user } = useContext(AuthContext);

    const { _id, image, itemName, category, price, description, customization, rating, processingTime, quantity, userEmail, userName } = equi;


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if(result.isConfirmed) {
                fetch(`http://localhost:4200/equi/${_id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "THis item has been deleted",
                            icon: "success"
                          })
                          const remaining = equis.filter(equ => equ._id !== _id);
                          setEquis(remaining)

                    }
                })
            }
          })
    }

    return (
        <div className="w-11/12 mx-auto">
            {
                user.email == userEmail &&
                <div className="border-red-600 border mt-4">
                    {category}
                    {price}<br />
                    {quantity}<br />
                    {itemName} <br />
                    {description} <br />
                    {rating} <br />
                    {processingTime} <br />
                    {userName} <br />



                    <div className="flex  gap-3  mt-4 space-x-2">
                        <button className="btn btn-outline btn-info btn-sm w-10 relative left-2 items-center ">
                            <AiFillEye />
                        </button>
                        <Link to={`/updateEqui/${_id}`}> <button className="btn btn-outline btn-warning btn-sm flex items-center ">
                            <AiFillEdit />
                        </button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-outline btn-error btn-sm flex items-center ">
                            <AiFillDelete />
                        </button>
                    </div>

                </div>
            }

        </div>
    );
};

export default MyEquiCard;