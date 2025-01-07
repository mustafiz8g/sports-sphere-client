// import { Link, useLoaderData } from "react-router-dom";
// import Footer from "../Shared/Footer";
// import Navbar from "../Shared/Navbar";
// import { Fade } from "react-awesome-reveal";



// const AllEqui = () => {

//     const equis = useLoaderData()



//     return (
       
//             <div>

//                 <style>{`
// th, td {
//   padding: 8px;
 

//   border-bottom: 1px solid #DDD;
//   }
// tr:hover {background-color: #fcf7ff;}
// }
// `}

//                 </style>



//                 <Navbar></Navbar>
//               <Fade>
//               <div className=" mt-6 mb-6">
//                     <h2 className="text-2xl text-center font-bold">Total Equipment : {equis.length}</h2>
//                 </div>

//                 <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto">
//                     <table className="table  ">
//                         {/* head */}

//                         <tr>
                          
//                             <th>About</th>
//                             <th>Price</th>
//                             <th>Action</th>
//                         </tr>


//                         {/* row 1 */}
//                         {
//                             equis.length == 0 ? (<p>no data</p>) : (
//                                 equis.map(equi => <tr key={equi._id}>
                                   
//                                     <td className=" ">
//                                         <div className="flex items-center  gap-3">
//                                             <div className="avatar">
//                                                 <div className="mask mask-squircle h-12 w-12">
//                                                     <img
//                                                         src={equi.image}
//                                                         alt="Product Image" />
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="font-bold">{equi.itemName}</div>
//                                                 <div className="text-sm opacity-50">{equi.category}</div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="">BDT {equi.price}</td>
//                                     <td className="">
//                                         <Link to={`${equi._id}`}>
//                                             <button className="btn btn-ghost btn-xs">details</button>
//                                         </Link>
//                                     </td>
//                                 </tr>
//                                 )
//                             )
//                         }
//                     </table>
//                 </div>
//               </Fade>


//                 <Footer></Footer>




//             </div>
       
//     );
// };

// export default AllEqui;












import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Fade } from "react-awesome-reveal";

const AllEqui = () => {
  const equis = useLoaderData();

  return (
    <div>
      <Navbar />
      <Fade>
        <div className="mt-6 mb-6">
          <h2 className="text-3xl font-bold text-center ">
            Total Equipment: {equis.length}
          </h2>
        </div>

        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equis.length === 0 ? (
            <p className="text-center text-gray-600">No data available</p>
          ) : (
            equis.map((equi) => (
              <div
                key={equi._id}
                className=" border  rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={equi.image}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold ">
                    {equi.itemName}
                  </h3>
                  <p className="text-sm">{equi.category}</p>
                  <p className="text-lg font-bold ">
                    BDT {equi.price}
                  </p>
                  <div className="mt-4">
                    <Link to={`${equi._id}`}>
                      <button className="bg-green-600 hover:bg-blue-500 text-white  font-semibold py-2 px-4 rounded w-full">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default AllEqui;
