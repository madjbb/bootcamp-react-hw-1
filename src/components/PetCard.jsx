import React from 'react';

function PetCard({ image, name, breed, borderColor }) {
  // console.log(arguments);
  return (
    <div className="border-2 rounded-xl flex flex-row overflow-hidden w-full min-w-[20rem] h-20" style={{border: `solid 2px ${borderColor}`}}>
      <div className="basis-1/5" >
        <img src={image} className="object-cover h-full w-full min-w-[5.5rem]" />
      </div>
      <div className="content flex flex-col justify-center gap-0.5 px-8 basis-4/5">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{breed}</p>
      </div>
    </div>
  );
}

export default PetCard;
