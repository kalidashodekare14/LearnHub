import React from 'react'
import { Link } from 'react-router'

const SignIn = () => {
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='space-y-3 border border-[#ddd]  w-96 p-5'>
                <h1 className='text-center text-3xl'>Login</h1>

                <div className='flex flex-col  gap-2'>
                    <label htmlFor="">Email</label>
                    <input className='input input-bordered' placeholder='Enter your email' type="email" />
                </div>
                <div className='flex flex-col  gap-2'>
                    <label htmlFor="">Password</label>
                    <input className='input input-bordered' placeholder='Password' type="password" />
                </div>
                <div className='text-center'>
                    <button className='btn'>Login</button>
                </div>
                <p>Create your account! <span className='text-[#307bc4]'><Link to={'/signup'}>Sign Up</Link></span></p>
            </div>
        </div>

    )
}

export default SignIn