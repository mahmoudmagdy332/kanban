import React from 'react'
import { card } from '../types/type'


const Box = ({cards,title}:{cards:card[],title:string}) => {
  return (
    <div className='w-full h-full overflow-y-scroll bg-[#BAD1E0] flex flex-col gap-3 border rounded-md  p-2'>
           <div className='flex justify-between gap-1 my-2'>
            <h3 className='text-black font-semibold text-xl'>{title}</h3>
            <div className='rounded-full w-8 h-7 bg-white flex justify-center items-center text-black font-bold'>{cards.length}</div>
           </div>
         {cards.map((card)=>(
             <div className='bg-white text-black rounded-md p-2 flex flex-col gap-2'>
                 <div className='flex items-end justify-between'>
                      <h4 className='text-lg  font-semibold'>{card.title}</h4>
                      <p className='text-gray-500 text-sm'>{card.age} yo</p>
                 </div>
                 <div className='text-gray-600'>{card.email}</div>
                 <div className='text-gray-400'>{card.mobile}</div>
             </div>
         ))}
     </div>
  )
}

export default Box