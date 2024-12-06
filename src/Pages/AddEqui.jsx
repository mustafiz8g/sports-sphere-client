import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import AddItemForm from "./AddItemForm";


const AddEqui = () => {


    const handleAddEqui = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,chef, supplier, taste, category, details, photo}
        console.log(newCoffee)

        // send data to the server 
        fetch(`https://coffee-store-server-theta-sooty.vercel.app/coffee/`,{
            method: "POST",
           headers: {
             'content-type' : 'application/json'
           },
           body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }




    return (
        <div className=" ">
            <Navbar></Navbar>
            
           <div className="mx-auto w-11/12 space-y-5 bg-[#F2F9FF] md:p-7">


            <div className="space-y-4 ">
                <h1 className="text-center text-4xl font-bold">Add New Product</h1>
                <p className="text-center text-slate-600">Welcome to the Add Equipment page! Here, you can add new items to your inventory by providing all the necessary details. Fill in the form fields, including the item name, category, description, price, rating, and stock status. You can also upload an image of the equipment and spec and make it available for purchase!</p>
            </div>

           <form  onSubmit={handleAddEqui} >
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-bold text-gray-700">Image</label>
              <input
                type="text"
                name="image"
                placeholder="Enter image url"
                className="input  w-full"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700">Item Name</label>
              <input
                type="text"
                name="itemName"
                placeholder="Enter Item Name"
                className="input  w-full"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700">Category Name</label>
              <input
                type="text"
                name="category"
                placeholder="Enter Category Name"
                className="input  w-full"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter Price"
                className="input  w-full"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700">Description</label>
              <textarea 
              name="description" 
              type='textarea' 
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
                placeholder="Enter Rating"
                className="input  w-full"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700">Processing Time</label>
              <input
                type="text"
                name="details"
                placeholder="Enter Processing Time"
                className="input  w-full"
              />
            </div>
            <div className="">
              <label className="block font-bold text-gray-700">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input  w-full"
              />
            </div>
            <div className="">
              <label className="block font-bold text-gray-700">Stock Status</label>
              <input
                type="text"
                name="photo"
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
              />
            </div>
            <div className="">
              <label className="block font-bold text-gray-700">User Name</label>
              <input
                type="text"
                name="userName"
                
                className="input  w-full"
              />
            </div>
          </div>
          <input className="btn btn-primary w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white" type="submit" value="Add Coffee" />
         
        </form>
           </div>

       

            <Footer></Footer>
        </div>
    );
};

export default AddEqui;