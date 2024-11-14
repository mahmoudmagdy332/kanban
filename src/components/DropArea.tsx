// DropArea.js
import React from 'react';
import { useDrop } from 'react-dnd';

import { card } from '../types/type';
import DraggableCard from './DraggableCard ';

const DropArea = ({cards,title}:{cards:card[],title:string}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => {
      console.log('Dropped item:', item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{

        backgroundColor: isOver ? '#cce5ff' : '#f0f0f0',

      }}
      className='w-full h-full overflow-y-scroll bg-[#BAD1E0]  border rounded-md  p-2'
    >
      <div className='flex flex-col gap-3'>
           <div className='flex justify-between gap-1 my-2'>
            <h3 className='text-black font-semibold text-xl'>{title}</h3>
            <div className='rounded-full w-8 h-7 bg-white flex justify-center items-center text-black font-bold'>{cards.length}</div>
           </div>
         {cards.map((card)=>(
             <DraggableCard card={card}/>
         ))}
     </div>
    </div>
  );
};

export default DropArea;
