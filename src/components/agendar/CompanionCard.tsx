import { Companion, Schedule } from "./../../types/agendar";

interface CompanionCardProps {
  companion: Companion;
  onSelect: (companion: Companion) => void;
  isSelected?: boolean;
  setSelectedSchedule: React.Dispatch<React.SetStateAction<Schedule | null>>;
}

const CompanionCard = ({ companion, onSelect, isSelected = false, setSelectedSchedule }: CompanionCardProps) => {
  const backgroundColor = companion.id % 2 === 0 ? '#E8037D' : '#0D8CBE';
  const handleSelect = () => {
    onSelect(companion)
    setSelectedSchedule(null)
  }
  return (
    <div 
      className={`w-[250px] h-[350px] shadow-md rounded-lg overflow-hidden flex flex-col items-center relative ${
        isSelected ? 'ring-4 ring-yellow-400' : ''
      }`} 
      style={{ backgroundColor }} 
    >
      <img src={companion.imageUrl} alt={companion.name} className="w-full h-full object-cover" />
      
      <h3 className="text-lg font-semibold text-gray-700 absolute bg-white text-[15px] px-3 py-1 rounded-lg top-2 right-2">
        {companion.name}
      </h3>
      
      <button 
        onClick={handleSelect}
        className='absolute bottom-2 rounded-lg bg-[#083d54] border-2 border-[#083d54] px-4 py-2 font-medium hover:bg-[#0a5a7a] hover:border-[#0a5a7a] hover:cursor-pointer text-white'
      >
        Seleccionar
      </button>
    </div>
  );
};

export default CompanionCard;