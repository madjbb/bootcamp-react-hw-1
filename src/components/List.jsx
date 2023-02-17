import React from 'react';
import { nanoid } from 'nanoid';
import PetCard from './PetCard';

function List({ items=[] }) {
  // console.log(arguments);
  return (
    <div className="flex flex-col gap-2">
      {items.map((pet) => (<PetCard key={nanoid()} {...pet} />))}
    </div>
  )
}

export default List;