import { Day, TimeSlot } from "./../../types/agendar";

interface DayTimeSlotProps {
  day: Day;
  time: TimeSlot;
  isBusy: boolean;
  onSelect: () => void;
  isSelected?: boolean;
}

const DayTimeSlot = ({ day, time, isBusy, onSelect, isSelected = false }: DayTimeSlotProps) => {
  console.log('day::', day);
  return (
    <button
      onClick={!isBusy ? onSelect : undefined}
      disabled={isBusy}
      className={`p-2 rounded text-sm ${isSelected  ? 'ring-3 ring-yellow-400' : ''} ${
        isBusy
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:cursor-pointer'
      }`}
    >
      {time}
      {isBusy ? <span className="text-xs block">Ocupado</span> : <span className="text-xs block">Disponible</span>}
    </button>
  );
};

export default DayTimeSlot;