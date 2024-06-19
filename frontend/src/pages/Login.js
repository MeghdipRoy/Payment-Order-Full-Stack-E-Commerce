import React, { useContext } from 'react';
import loginIcons from '../assest/signin.gif'; // Corrected the file path
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import {toast}  from 'react-toastify';
import Context from '../context';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data,setData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()
  const {fetchUserDetails,fetchUserAddToCart} = useContext(Context) 


  const handleOnChange = (e) =>{
    const {name,value} = e.target

    setData ((preve)=>{
      return {
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = async (e)=>{
      e.preventDefault()

      const dataResponse =  await  fetch(SummaryApi.signIn.url,{
        method: SummaryApi.signIn.method,
        credentials:'include',
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })

      const dataApi = await  dataResponse.json()

      if(dataApi.success){
        toast.success(dataApi.message)
       
        navigate('/')

        fetchUserDetails()
        fetchUserAddToCart()
      }
      if(dataApi.error){
        toast.error(dataApi.message)
      }
  }


  

  return (
    <section id='login'>
      <div className="mx-auto container p-4">
        <div className='bg-white p-5 w-full max-w-sm mx-auto '>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='login icons' />
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}> 
            <div className="grid mb-4">
              <label>Email:</label>
              <div className='bg-slate-100 p-2'>
                <input type='email'
                 placeholder='enter email' 
                 name='email'
                 value={data.email}
                 onChange = {handleOnChange}
                 className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>
            <div className="grid mb-4">
              <label>Password:</label>
              <div className='bg-slate-100 p-2 flex items-center'>
                <input type={showPassword ? "text":"password"}
                value={data.password}
                name='password'
                
                onChange = {handleOnChange}
                  placeholder='enter password' className='w-full h-full outline-none bg-transparent' />
                <div className=' cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                 <span>
                  {
                    showPassword ? (
                      <FaEyeSlash />
                    )
                    :
                    (
                      <FaEye />
                    )
                  }
                
                  
                 </span>
                </div>
              </div>
              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:text-red-600'>
                Forgot Password?
              </Link>
            </div>
            <button  className='px-3 py-1 hover:bg-purple-700 rounded-full text-white bg-yellow-600 hover:scale-110 transition-all mx-auto block mt-4'>Login</button>
          </form>

          <p className="my-5">Don't have an account ? <Link to={"/sign-up"} className='hover:text-red-700 hover:underline'>Sign Up</Link></p>
        </div>
      </div>
    </section>
  );
}

export default Login;
