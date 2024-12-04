import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";



const Login = () => {


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        
    }
  
    const [see, close ] = useState();
    const toggle = (i) => {
        close(i)
    }

    return (
        <div className="container mx-auto flex justify-center mt-20">

            <div className="p-9  w-full max-w-sm  shadow-2xl">
                <h1 className="font-semibold text-3xl text-center pb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                            name="password"
                            type= {see ? 'text' : 'password'}
                            placeholder="password"
                            className="input input-bordered"
                            required />


                        <div  
                        onClick={() => toggle(!see)}
                        className="relative left-[276px] bottom-8">
                            {
                                see ? <MdRemoveRedEye /> : <FaEyeSlash />
                            }
                        </div>


                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary  text-[16px]">Login</button>
                    </div>

                    <div>
                        <p className="text-[14px] mt-3">dont have an account? <Link to ="/register"><button className="link link-info font-bold">register</button>
                        </Link></p>
                    </div>

                </form>

                <div className="divider "><span className="text-[12px]">OR</span></div>

                <div className="*:w-full space-y-2">
                    <button className="  btn btn-outline btn-sm "><FaGoogle />Continue with Google</button>
                    <button className=" btn btn-outline btn-sm btn-info">< FaFacebook />Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;