import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/login/login.svg';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 flex-col lg:flex-row md:grid-cols-2">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={logo} alt="login svg" srcset="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 py-10">
                    <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="sign up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;