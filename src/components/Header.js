import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md items-center'>
        <div className='flex gap-1'>
            <h1 className='text-4xl text-primary border-t-secondary border-t-2 font-semibold'>S</h1>
            <h1 className='text-4xl text-secondary border-t-primary border-b-2 font-semibold'>H</h1>
        </div>
        <h1 className='underline cursor-pointer text-xl hover:scale-105 text-primary'>Login</h1>
    </div>
  )
}

export default Header