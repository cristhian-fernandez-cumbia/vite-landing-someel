import React from 'react';

interface CardProps {
  imageUrl: string;
  name: string;
  index: number;
  daysReading: string[];
  hoursReading: string[];
  themes: string[];
  isSelected : boolean;
  onSelect: () => void;
}

const CardSchedule: React.FC<CardProps> = ({ 
  imageUrl, 
  name, 
  index,
  daysReading,
  hoursReading,
  themes,
  isSelected ,
  onSelect
}) => {
  const backgroundColor = index % 2 === 0 ? '#E8037D' : '#0D8CBE';
  console.log('daysReading:::', daysReading);
  console.log('hoursReading:::', hoursReading);
  console.log('themes:::', themes);
  return (
    <div 
      className={`w-[250px] h-[350px] shadow-md rounded-lg overflow-hidden flex flex-col items-center relative ${isSelected  ? 'ring-4 ring-yellow-400' : ''}`} 
      style={{ backgroundColor }} 
    >
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      
      <h3 className="text-lg font-semibold text-gray-700 absolute bg-white text-[15px] px-3 py-1 rounded-lg top-2 right-2">{name}</h3>
      <button 
        className='absolute bottom-2 rounded-lg bg-[#083d54] border-2 border-[#083d54] px-4 py-2 font-medium hover:bg-[#0a5a7a] hover:border-[#0a5a7a] hover:cursor-pointer' 
        onClick={onSelect}
      >Seleccionar</button>
    </div>
  );
}

export default CardSchedule;