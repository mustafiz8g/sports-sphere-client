import { useContext } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";



const UpdateEqui = () => {

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
                title: "Equipment Updated Successfully",
                icon: "success"
              });
          }
      })


    }




    return (
        <div className=" ">
            <Navbar></Navbar>

            <div className="mx-auto w-11/12 space-y-5 bg-[#F2F9FF] md:p-7">


                <div className="space-y-4 ">
                    <h1 className="text-center text-4xl font-bold">Update Equipment - {itemName}</h1>
                    <p className="text-center text-slate-600">Welcome to the Add Equipment page! Here, you can add new items to your inventory by providing all the necessary details. Fill in the form fields, including the item name, category, description, price, rating, and stock status. You can also upload an image of the equipment and spec and make it available for purchase!</p>
                </div>

                <form onSubmit={handleUpdateEqui} >
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-bold text-gray-700">Image</label>
                            <input
                                type="text"
                                name="image"
                                defaultValue={image}
                                placeholder="Enter image url"
                                className="input  w-full"
                            />
                        </div>
                        <div>
                            <label className="block font-bold text-gray-700">Item Name</label>
                            <input
                                type="text"
                                name="itemName"
                                defaultValue={itemName}
                                placeholder="Enter Item Name"
                                className="input  w-full"
                            />
                        </div>
                        <div>
                            <label className="block font-bold text-gray-700">Category Name</label>
                            <input
                                type="text"
                                name="category"
                                defaultValue={category}
                                placeholder="Enter Category Name"
                                className="input  w-full"
                            />
                        </div>
                        <div>
                            <label className="block font-bold text-gray-700">Price</label>
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
                                placeholder="Enter Price"
                                className="input  w-full"
                            />
                        </div>
                        <div>
                            <label className="block font-bold text-gray-700 mb-">Description</label>
                            <textarea
                                name="description"
                                type='textarea'
                                defaultValue={description}
                                id=""
                                className="textarea  w-full"
                            >

                            </textarea>
                        </div>
                        <div>
                            <label className="block font-bold text-gray-700">Custmization</label>
                            <textarea
                                name="customization"
                                type='textarea'
                                defaultValue={customization}
                                id=""
                                className="textarea  w-full"
                            >

                            </textarea>
                        </div>
                        <div>
                            <label className="block font-bold text-gray-700">Rating (1-5)</label>
                            <input
                                type="text"
                                name="rating"
                                defaultValue={rating}
                                placeholder="Enter Rating"
                                className="input  w-full"
                            />
                        </div>
                        <div>
                            <label className="block font-bold text-gray-700">Processing Time</label>
                            <input
                                type="text"
                                name="processingTime"
                                defaultValue={processingTime}
                                placeholder="Enter Processing Time"
                                className="input  w-full"
                            />
                        </div>

                        <div className="">
                            <label className="block font-bold text-gray-700">Stock Status</label>
                            <input
                                type="text"
                                name="quantity"
                                defaultValue={quantity}
                                placeholder="Enter Availabe product Quantity"
                                className="input  w-full"
                            />
                        </div>
                        <div className="">
                            <label className="block font-bold text-gray-700">User Email</label>
                            <input
                                type="text"
                                name="userEmail"
                                className="input  w-full"
                                value={user.email}
                                readOnly
                            />
                        </div>
                        <div className="">
                            <label className="block font-bold text-gray-700">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={user.displayName}
                                readOnly
                                className="input  w-full"
                            />
                        </div>
                    <input className="col-span-2 btn btn-primary w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white" type="submit" value="Add Product" />
                    </div>

                </form>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default UpdateEqui;