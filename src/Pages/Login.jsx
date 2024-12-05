import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser, forgetPassword } = useContext(AuthContext);
    const [error, setError] = useState()
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef();
    


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        setError('')
        if (password.length < 6) {
            toast('password atleast 6 characters')
            return;

        }

        loginUser(email, password)
            .then(result => {
                console.log('Login at', result.user)
                e.target.reset();
                navigate('/')
            })
            .catch(err => {
                console.log('Error is', err)

                toast(err.message)

            })





    }
    const handleForgetPassword = () => {
        console.log('get me email address', emailRef.current.value)
        const email = emailRef.current.value;
        if (!email) {
            toast('Please Provide a valid email')
            return;
        }
        else {
            forgetPassword(email)
                .then(() => {
                    toast('Password Reset Email Sent, Please check you email')
                })
        }

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
                            ref={emailRef}
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
                            type={showPassword ? 'text' : 'password'}
                        
                            placeholder="password"
                            className="input input-bordered"
                            required />


                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            className="relative left-[276px] bottom-8">
                            {
                                showPassword ? <MdRemoveRedEye /> : <FaEyeSlash />
                            }
                        </div>

                        <p className="text-error text-[14px]">{error}</p>


                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary  text-[16px]">Login</button>
                    </div>

                    <div>
                        <p className="text-[14px] mt-3">dont have an account? <Link to="/register"><button className="link link-info font-bold">register</button>
                        </Link></p>
                    </div>

                </form>

                <div className="divider "><span className="text-[12px]">OR</span></div>

                <div className="*:w-full space-y-2">
                    <button className="  btn btn-outline btn-sm "><FaGoogle />Continue with Google</button>
                    <button className=" btn btn-outline btn-sm btn-info">< FaFacebook />Continue with Facebook</button>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;