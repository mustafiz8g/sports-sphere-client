import { Link } from "react-router-dom";

import errorImg from '../assets/404.gif'
import { Fade } from "react-awesome-reveal";

const Error = () => {
    return (
       <Fade>
         <div className=" flex flex-col items-center">
          
          <div>
              <img className="" src={errorImg} alt="" />
          </div>
        <div className="flex flex-col items-center relative bottom-10 space-y-3">
        <h4 className="text-6xl font-medium text-slate-700">OOPPS!</h4>
          <p>We are sorry, something is not working here !</p>

       
         <Link to='/'> <button className="btn btn-error">Go Home</button></Link>
        </div>
      </div>
       </Fade>
    );
};

export default Error;