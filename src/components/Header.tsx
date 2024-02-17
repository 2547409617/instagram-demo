import React from 'react'

const Header = () => {
  return (
    <div className='mt-5 ' >
        <div
          className=" flex items-center justify-between "
        >
          <div >instagram</div>
          <div>
            <button
              className="bg-[#0092F6] text-white px-4 py-2 rounded hover:bg-[#0092F6] mr-2"
            >
              Log In
            </button>
            <button
              className="text-black cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
  )
}

export default Header