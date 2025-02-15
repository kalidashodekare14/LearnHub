import React, { useState } from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {

    const [isSelected, setIsSelected] = useState(1)

    const navLinks = [
        {
            id: 1,
            name: 'Profile',
            route: '/dashboard'
        },
        {
            id: 2,
            name: 'Application Form',
            route: '/dashboard/application-form'
        },
        {
            id: 3,
            name: 'Application',
            route: '/dashboard/application'
        },
    ]

    return (
        <div className='flex items-center '>
            <div className='border w-52 h-screen'>
                <h1 className='text-3xl'>LearnHub</h1>
                <div className='flex flex-col gap-3 my-5'>
                    {
                        navLinks.map(nav => (
                            <Link onClick={() => setIsSelected(nav.id)} className={`${isSelected === nav.id && 'bg-[#307bc4] text-white'} py-3 px-2`} key={nav.id} to={nav.route}>{nav.name}</Link>
                        ))
                    }
                </div>
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard