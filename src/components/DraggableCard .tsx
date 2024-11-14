// DraggableCard.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { card } from '../types/type';

const DraggableCard = ({card}:{card:card}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{

        backgroundColor: isDragging ? '#e0e0e0' : '#fff',
 
      }}
      className='bg-white text-black rounded-md p-2 '
    >
     <div className='flex flex-col gap-2'>
                 <div className='flex items-end justify-between'>
                      <h4 className='text-lg  font-semibold'>{card.title}</h4>
                      <p className='text-gray-500 text-sm'>{card.age} yo</p>
                 </div>
                 <div className='text-gray-600'>{card.email}</div>
                 <div className='text-gray-400'>{card.mobile}</div>
             </div>
    </div>
  );
};

export default DraggableCard;
