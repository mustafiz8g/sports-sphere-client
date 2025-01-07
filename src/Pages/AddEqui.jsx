import { useContext } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";
import { Fade } from "react-awesome-reveal";
import axios from "axios";



const AddEqui = () => {

    const { user } = useContext(AuthContext)

    const handleAddEqui = e => {
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

        const newEqui = { image, itemName, category, price, description, customization, rating, processingTime, quantity, userEmail, userName }
        console.log(newEqui)

        //  using axios        
        axios.post('https://sports-sphere.vercel.app/equi', newEqui)
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Equipment Added Successfully",
                        icon: "success"
                    });
                }
            })



    }




    return (

        <div className=" ">
            <Navbar></Navbar>
            <Fade>

                <div className="mx-auto w-11/12 space-y-5 md:p-7">


                    <div className="space-y-4 ">
                        <h1 className="text-center text-4xl font-bold">Add New Product</h1>
                        <p className="text-center ">Welcome to the Add Equipment page! Here, you can add new items to your inventory by providing all the necessary details. Fill in the form fields, including the item name, category, description, price, rating, and stock status. You can also upload an image of the equipment and spec and make it available for purchase!</p>
                    </div>
                    <form onSubmit={handleAddEqui}>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-bold">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Enter image URL"
                                    className="input w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Item Name</label>
                                <input
                                    type="text"
                                    name="itemName"
                                    placeholder="Enter Item Name"
                                    className="input w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Category Name</label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Enter Category Name"
                                    className="input w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Enter Price"
                                    className="input w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Description</label>
                                <textarea
                                    name="description"
                                    placeholder="Enter Description"
                                    className="textarea w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block font-bold">Customization</label>
                                <textarea
                                    name="customization"
                                    placeholder="Enter Customization Details"
                                    className="textarea w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block font-bold">Rating (1-5)</label>
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="Enter Rating"
                                    min="1"
                                    max="5"
                                    className="input w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Processing Time</label>
                                <input
                                    type="text"
                                    name="processingTime"
                                    placeholder="Enter Processing Time"
                                    className="input w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Stock Status</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Enter Available Product Quantity"
                                    className="input w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-bold">User Email</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    value={user.email}
                                    readOnly
                                    className="input w-full border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block font-bold">User Name</label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={user.displayName}
                                    readOnly
                                    className="input w-full border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                                />
                            </div>
                            <input
                                className="col-span-2 btn btn-primary w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white"
                                type="submit"
                                value="Add Product"
                            />
                        </div>
                    </form>


                </div>



                <Footer></Footer>
            </Fade>
        </div>
    );
};

export default AddEqui;






// https://i.ibb.co.com/1dbgZyY/Screenshot-2024-12-08-164028.png
// https://i.ibb.co.com/xCyYCTn/Screenshot-2024-12-08-164148.png
// https://i.ibb.co.com/t8vPYcP/Screenshot-2024-12-08-164324.png
// https://i.ibb.co.com/VSFp0JP/Screenshot-2024-12-08-164651.png
// https://i.ibb.co.com/RzD6f8L/Screenshot-2024-12-08-165047.png
// https://i.ibb.co.com/FJ9HHCb/Screenshot-2024-12-08-165325.png
// https://i.ibb.co.com/zhBsn5D/Screenshot-2024-12-08-165522.png