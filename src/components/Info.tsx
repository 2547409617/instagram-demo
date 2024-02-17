import React from 'react'
import Image from "next/image";


const Info = () => {
  return (
    <div
    className="flex items-center space-x-4 w-full pt-10 pb-6 "
  >
    <div >
      <Image
        src="/avatar.jpeg"
        width={100}
        height={100}
        alt="avatar"
        className="w-24 h-24 object-cover rounded-full"
      />
    </div>

    <div>
        <p className="text-lg font-semibold">#houseplants</p> {/* */}
        <p className="text-lg">10,503,659</p>
        <p className="text-lg">posts</p>
      </div>

    
  </div>
  )
}

export default Info