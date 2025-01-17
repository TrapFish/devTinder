import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [login, setLogin] = useState({
        emailId: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = async () => {
        try {
            console.log("Line 17 ::", login);
            const data = await axios.post("http://localhost:3000/login", login, { withCredentials: true });
            console.log("Line 20 ::", data)
        } catch (error) {
            console.log("Error ::", error)
        }

    }

    return (

        <div>
            <div className='flex justify-center my-10'>
                <div className="card bg-base-300 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Login </h2>
                        <div className=''>

                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Email ID : </span>
                                </div>
                                <input type="email" className="input input-bordered w-full max-w-xs" name="emailId" value={login?.emailId} onChange={handleChange} />

                            </label>

                            <label className="form-control w-full max-w-xs my-4">
                                <div className="label">
                                    <span className="label-text">Password : </span>
                                </div>
                                <input type="password" className="input input-bordered w-full max-w-xs" name="password" value={login?.password} onChange={handleChange} />

                            </label>
                        </div>
                        <div className="card-actions justify-center m-2">
                            <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;