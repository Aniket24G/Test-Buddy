import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { useState } from 'react'
import { useContext } from 'react';
import UserName from '../../Contexts/UserName';

function Login() {
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const history = useNavigate();

    const {setUsername} = useContext(UserName);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!user){
            alert("Your name is required")
            return;
        }
        if(!email){
            alert("Your email is required")
            return;
        }
        history('/questions')
        setUsername(user)
        // console.log(user);
    }
    return (
        <div className='bg-indigo-600'>
        <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center mx-auto w-3/4'>
            <div className='lg:w-1/2 lg:pr-8 mb-4 lg:mb-0 border-b-4 border-orange-400 rounded-xl   bg-green-300  hover:scale-105 transform transition-all duration-500 lg:mx-4 hover:shadow-lg hover:shadow-orange-600 hover:border-b-0'>
            <img src={logo} alt="Logo" className='p-6 rounded-full' width={400}/>
                <p className='p-6 my-6 mx-6 text-3xl font-mono font-semibold text-indigo-600'>Let's see how much you know!!!</p>
            </div>

            <div className='lg:w-1/2 lg:pr-8 mb-1 border-b-4 border-orange-400 rounded-xl  bg-green-300 hover:scale-105 transform transition-all duration-500 lg:mr-3 hover:shadow-lg hover:shadow-orange-600 hover:border-b-0 '>
                <form className='p-10 bg-green-300 rounded-xl flex flex-col'
                >
                    <label htmlFor="username" className='mb-2 font-mono font-bold'>Your name  </label>
                    <input type="text"
                    id='username'
                    name='username'
                    className='mb-4 p-2.5 border rounded-lg font-mono font-semibold shadow shadow-indigo-300'
                    value={user} 
                    onChange={(e) => setUser(e.target.value)}
                    required/>
                    <label htmlFor="email" className='mb-2 font-mono font-bold'>Email </label>
                    <input type="email"
                    id='email'
                    name='email'
                    className='mb-4 p-2.5 border rounded-lg font-mono font-semibold shadow shadow-indigo-300' 
                    required=''
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                    <button
                    type='button'
                    className='bg-indigo-600 text-white p-2 rounded-md font-bold font-mono hover:border-2 border-orange-400'
                    onClick={handleSubmit}>
                        Let's Start
                    </button>
                </form>
            </div>

        </div>
        </div>
    )
}

export default Login