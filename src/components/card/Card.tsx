import React from 'react';

interface CardProps {
  imageUrl: string;
  name: string;
  passion: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, name, passion, index }) => {
  const backgroundColor = index % 2 === 0 ? '#E8037D' : '#0D8CBE';

  return (
    <div 
      className="w-[250px] h-[350px] shadow-md rounded-lg overflow-hidden flex flex-col items-center relative" 
      style={{ backgroundColor }} 
    >
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      
      <div className="absolute bottom-0 text-center bg-white bg-opacity-50 w-[180px] h-[90px] px-4 py-2 flex items-center justify-center flex-col rounded-xl mb-3">
        <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
        <p className="text-sm text-gray-700 card-description">{passion}</p>
      </div>
    </div>
  );
}

export default Card;