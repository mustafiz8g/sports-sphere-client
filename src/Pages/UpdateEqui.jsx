import { useContext } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";



const UpdateEqui = () => {
    
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const equi = useLoaderData();
    const {_id, image, itemName, category, price, description, customization, rating, processingTime, quantity} = equi;

    const handleUpdateEqui = e => {
        e.preventDefault();
        const form = e.target
        const image = form.image.value;
        const itemName = form.itemName.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const processingTime = form.processingTime.value;
        const quantity = form.quantity.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

      const updatedEqui = {image, itemName, category, price, description, customization, rating, processingTime, quantity, userEmail, userName}
      console.log(updatedEqui)

      //
      
      
      // send data to the server
      fetch(`http://localhost:4200/equi/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        }, 
        body: JSON.stringify(updatedEqui)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount){
            Swal.fire({
              
                icon: "success",
                title: "Updated Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(-1)
              
          }
      })


    }




    return (
     <Fade>
           <div className=" ">
            <Navbar></Navbar>

            <div className="mx-auto w-11/12 space-y-5 md:p-7">


                <div className="space-y-4 ">
                    <h1 className="text-center text-4xl font-bold">Update Equipment - {itemName}</h1>
                    <p className="text-center ">Welcome to the Add Equipment page! Here, you can add new items to your inventory by providing all the necessary details. Fill in the form fields, including the item name, category, description, price, rating, and stock status. You can also upload an image of the equipment and spec and make it available for purchase!</p>
                </div>
                <form onSubmit={handleUpdateEqui}>
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <label className="block font-bold">Image</label>
            <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Enter image url"
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">Item Name</label>
            <input
                type="text"
                name="itemName"
                defaultValue={itemName}
                placeholder="Enter Item Name"
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">Category Name</label>
            <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter Category Name"
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">Price</label>
            <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter Price"
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold mb-">Description</label>
            <textarea
                name="description"
                type="textarea"
                defaultValue={description}
                className="textarea w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">Customization</label>
            <textarea
                name="customization"
                type="textarea"
                defaultValue={customization}
                className="textarea w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">Rating (1-5)</label>
            <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Enter Rating"
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">Processing Time</label>
            <input
                type="text"
                name="processingTime"
                defaultValue={processingTime}
                placeholder="Enter Processing Time"
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">Stock Status</label>
            <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Enter Available Product Quantity"
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">User Email</label>
            <input
                type="text"
                name="userEmail"
                value={user.email}
                readOnly
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <div>
            <label className="block font-bold">User Name</label>
            <input
                type="text"
                name="userName"
                value={user.displayName}
                readOnly
                className="input w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
        </div>
        <input
            className="col-span-2 btn btn-primary w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            type="submit"
            value="Update"
        />
    </div>
</form>

            </div>



            <Footer></Footer>
        </div>
     </Fade>
    );
};

export default UpdateEqui;