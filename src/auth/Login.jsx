import React, { useContext, useState } from 'react'
import { Appcontext } from '../context/context';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const {email, setEmail} = useContext(Appcontext)
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
           navigate("/profile")

    }

    return (
        <div className=' min-h-screen w-screen bg-gray-300 flex items-center justify-center'>
            <div className='bg-white w-full max-w-md h-full md:h-[700px] rounded-xl p-6 flex flex-col '>
                <form onSubmit={handlesubmit} className="flex flex-col  gap-4  items-start py-5 w-80 sm:w-[352px] text-gray-500 rounded-lg  bg-white">
                    <p className="text-4xl font-semibold  max-w-60  text-black   ">
                        Signin to your PopX account
                    </p>
                    <p className='text-xl font-semibold  '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="relative ">
                        <label className='absolute top-[-2px] left-3 px-1 bg-neutral-50  font-semibold text-violet-600'>Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className=" border border-gray-500 rounded-md w-95 p-2 mt-3 outline-indigo-500" type="email" />
                    </div>
                    <div className="relative ">
                        <label className='absolute top-[-10px] left-3 px-1 bg-neutral-50  font-semibold text-violet-600'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-500 rounded-md w-95 p-2 mt-1 outline-indigo-500" type="password" />
                    </div>

                    <button className="bg-zinc-400 hover:bg-zinc-500 transition-all text-white font-semibold w-95 py-2 rounded-md cursor-pointer">
                        Login
                    </button>
                </form>


            </div>
        </div>
    );

}

export default Login
