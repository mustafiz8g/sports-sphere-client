import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";



const AllEqui = () => {

    const equis = useLoaderData()



    return (
        <div>

            <style>{`
           th, td {
              padding: 8px;
             
              text-align: center; 
              border-bottom: 1px solid #DDD;
              }
            tr:hover {background-color: #fcf7ff;}
            }
          `}

            </style>
            <Navbar></Navbar>
            <div className="text-center mt-6 mb-6">
                <h2 className="text-2xl font-bold">Total Equipment : {equis.length}</h2>
            </div>

            <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto">
                <table className="table  ">
                    {/* head */}

                    <tr>
                        <th>Serial</th>
                        <th>About</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>


                    {/* row 1 */}
                    {
                        equis.length == 0 ? (<p>no data</p>) : (
                            equis.map(equi => <tr key={equi._id}>
                                <td>a</td>
                                <td className="text-center align-middle ">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={equi.image}
                                                    alt="Product Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{equi.itemName}</div>
                                            <div className="text-sm opacity-50">{equi.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center align-middle  ">BDT {equi.price}</td>
                                <td className="text-center align-middle  ">
                                    <Link to={`${equi._id}`}>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        )
                    }
                </table>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default AllEqui;