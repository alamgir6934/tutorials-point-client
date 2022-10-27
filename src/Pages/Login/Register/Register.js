import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=''>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  lg:ml-80 ml-12">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;