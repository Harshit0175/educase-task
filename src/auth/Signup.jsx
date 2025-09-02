import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../context/context';



const Signup = () => {

       const {name,setName,email,setEmail,phone,setPhone,password,setPassword,company,setCompany,isAgency,setIsAgency} = useContext(Appcontext);
       const navigate = useNavigate();

       const handlesubmit=(e)=>{
           e.preventDefault();
           navigate("/profile")

             }


  return (
    <div className=' min-h-screen w-screen bg-gray-300 flex items-center justify-center'>
                <div className='bg-white w-full max-w-md h-full md:h-[700px] rounded-xl p-6 flex flex-col '>
                <form  onSubmit={handlesubmit} className="flex flex-col  gap-4  items-start py-5 w-80 sm:w-[352px] text-gray-500 rounded-lg  bg-white">
                <p className="text-4xl font-semibold  max-w-60  text-black   ">
                    Create your PopX account
                </p>
                
                <div className="relative ">
                    <label className='absolute top-[-2px] left-3 px-1 bg-neutral-50  font-semibold text-violet-600 '>Full Name<span className='text-red-500'>*</span></label>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Type here..." className=" border border-gray-500 rounded-md w-95 p-2 mt-3 outline-indigo-500" type="name" required />
                </div>
                <div className="relative ">
                    <label className='absolute top-[-10px] left-3 px-1 bg-neutral-50  font-semibold text-violet-600'>Phone Number<span className='text-red-500'>*</span></label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Type here..." className="border border-gray-500 rounded-md w-95 p-2 mt-1 outline-indigo-500" type="phone" required />
                </div>
                <div className="relative ">
                    <label className='absolute top-[-2px] left-3 px-1 bg-neutral-50  font-semibold text-violet-600'>Email Address<span className='text-red-500'>*</span></label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className=" border border-gray-500 rounded-md w-95 p-2 mt-3 outline-indigo-500" type="email" required />
                </div>
                <div className="relative ">
                    <label className='absolute top-[-10px] left-3 px-1 bg-neutral-50  font-semibold text-violet-600'>Password<span className='text-red-500'>*</span></label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-500 rounded-md w-95 p-2 mt-1 outline-indigo-500" type="password" required />
                </div>
                <div className="relative ">
                    <label className='absolute top-[-10px] left-3 px-1 bg-neutral-50  font-semibold text-violet-600'>Company<span className='text-red-500'>*</span></label>
                    <input onChange={(e) => setCompany(e.target.value)} value={company} placeholder="type here" className="border border-gray-500 rounded-md w-95 p-2 mt-1 outline-indigo-500" type="text" required />
                </div>
                    <div className='flex flex-col'>
                      <label>Are you an Agency? </label>
                      <div className='flex gap-4'>
                      <input type='radio' id='yes' name='agency' value='yes' checked={(isAgency=='yes')} onChange={() => setIsAgency("yes")} className="form-radio accent-violet-600"/>
                       <label htmlFor="yes" >Yes</label>
                       <input type='radio' id='no' name='agency' value='no' checked={isAgency=='no'} onChange={() => setIsAgency("no")} className="form-radio accent-violet-600"/>
                       <label htmlFor="no">No</label>
                       </div>
                       </div>
                  

                

                <button className="bg-violet-600 hover:bg-violet-800 transition-all text-white font-semibold w-95 py-2 rounded-md cursor-pointer" >
                    Create Account
                </button>
            </form>
                 
            
                  </div>
                </div>
  )
}

export default Signup
