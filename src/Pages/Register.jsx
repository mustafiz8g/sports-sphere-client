
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../Shared/Navbar";
import { Fade } from "react-awesome-reveal";



const Register = () => {


    const navigate = useNavigate();
    const { registerUser, setUser, loginWithGoogle, updateUser } = useContext(AuthContext);
    const [error, setError] = useState()
    const [success, setSuccess] = useState(false)

    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {


        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;
        // console.log(terms)

        //reset error
        setError('')
        setSuccess(false)

        if (!terms) {
            setError('Please accept our terms & conditon');
            return;
        }


        // password validation 
        if (password.length < 6) {
            setError('password should be 6 cahharacters or longer')
            return;
        }
        const passwordRegexU = /^(?=.*[A-Z]).+$/
        const passwordRegexL = /^(?=.*[a-z]).+$/

        if (!passwordRegexU.test(password)) {
            setError('At least one Caracter Uppercase')
            return;
        }
        if (!passwordRegexL.test(password)) {
            setError('At least one Caracter Lowercase')
            return;
        }


        // console.log(name, photo, email, password)
        registerUser(email, password)
            .then(result => {
                console.log('user created at firebase', result.user)
                const user = result.user
                setSuccess(true);
                setUser(user)
                updateUser({
                    displayName: name,
                    photoURL: photo
                })

                e.target.reset();
                navigate('/')



            })
            .catch(err => {
                setError(err.message)
                setSuccess(false)


            })


    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(err => {
                console.log('Error', err)
            })
    }

    return (
        <Fade>
            <>

                <Navbar></Navbar>
                <div className="w-11/12 mx-auto flex justify-center mt-20">

                    <div className="p-9  w-full max-w-sm  shadow-2xl">
                        <h1 className="font-semibold text-3xl text-center pb-4">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo</span>
                                </label>
                                <input
                                    name="photo"
                                    type="text"
                                    placeholder="Photo Url"
                                    className="input input-bordered"
                                    required />
                            </div>
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
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                    autoComplete="current-password"
                                />


                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="relative left-[276px] bottom-8">
                                    {
                                        showPassword ? <MdRemoveRedEye /> : <FaEyeSlash />
                                    }
                                </div>

                                <p className="text-error text-[14px]">{error}</p>
                                {
                                    success && <p className="text-success text-[14px]">Register successfully</p>
                                }

                            </div>
                            <div className="form-control">
                                <label className="label flex justify-start gap-3  cursor-pointer">
                                    <input
                                        name="terms"
                                        type="checkbox" className="checkbox  checkbox-primary checkbox-xs" />
                                    <span className="label-text">Accept terms & condition</span>
                                </label>
                            </div>

                            <div className="form-control mt-4">
                                <button className="btn btn-primary  text-[16px]">Register</button>
                            </div>

                            <div>
                                <p className="text-[14px] mt-3">Already Customer ? <Link to="/login"><button className="link link-info font-bold">Login</button>
                                </Link></p>
                            </div>

                        </form>

                        <div className="divider "><span className="text-[12px]">OR</span></div>

                        <div className="*:w-full space-y-2">
                            <button
                                onClick={handleGoogleLogin}
                                className="  btn btn-outline btn-sm "><FaGoogle />Continue with Google</button>
                            <button className=" btn btn-outline btn-sm btn-info">< FaFacebook />Continue with Facebook</button>
                        </div>
                    </div>
                </div>

            </>
        </Fade>
    );
};

export default Register;