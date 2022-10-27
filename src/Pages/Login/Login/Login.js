import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub, FaCommentsDollar } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { providerLogin, gitProviderLogin, signIn } = useContext(AuthContext);
    const Navigate = useNavigate()
    const [error, SetError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        gitProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                SetError('')
                Navigate('/')
                // toast("Wow so easy !")
                // <ToastContainer/>
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // } else {
                //     Toast.error('your email is not verified')
                // }
            })
            .catch(error => {
                console.error(error)
                SetError(error.message)
                // toast.error('try again')

            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-center md:flex-row-reverse">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <button onClick={handleGoogleSignIn} className="btn btn-wide d-flex"> <FaGoogle></FaGoogle> Log in with google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-primary d-flex ml-8"> <FaGithub></FaGithub> Log in with Github.</button>

                </div>
                <form onSubmit={handleSubmit}>
                    {/* <h4>{error}</h4> */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;