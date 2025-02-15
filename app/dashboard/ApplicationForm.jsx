import React from 'react'

const ApplicationForm = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[50%] border border-[#ddd] p-3'>
        <h1 className='text-center text-2xl my-5'>Application Form</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Name</label>
            <input className='input input-bordered' type="text" />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="">Email</label>
            <input className='input input-bordered w-full' type="email" />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="">Course Name</label>
            <input className='input input-bordered w-full' type="text" />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="">University name</label>
            <input className='input input-bordered w-full' type="text" />
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="">Notes</label>
          <textarea className='textarea input-bordered w-full' type="text" />
        </div>
        <div className='text-center my-5'>
          <button className='btn'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm