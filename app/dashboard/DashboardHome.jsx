import React from 'react'

const dashboardHome = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='border p-3 flex flex-col justify-center items-center gap-3'>
        <img className='w-32' src="https://i.ibb.co.com/WcTWxsN/nav-img.png" alt="" />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <div className='border border-[#ddd] p-3'>
            <p>Kalidash Odekare</p>
          </div>
          <div className='border border-[#ddd] p-3'>
            <p>kalidashodekare14@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboardHome