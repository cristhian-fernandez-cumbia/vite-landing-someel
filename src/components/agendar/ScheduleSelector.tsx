import { Companion, Day, Schedule, TimeSlot } from "./../../types/agendar";
import DayTimeSlot from "./DayTimeSlot";

interface ScheduleSelectorProps {
  companion: Companion;
  onSelectSchedule: (schedule: {day: Day; time: TimeSlot}) => void;
  onBack: () => void;
  selectedSchedule: Schedule | null
}

const ScheduleSelector = ({ companion, onSelectSchedule, onBack, selectedSchedule }: ScheduleSelectorProps) => {
  return (
    <div>
      <div className="flex items-center">
        <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">2</span>
        <h2 className="ml-2 text-lg font-semibold">Escoge tu horario</h2>
      </div>
      
      <div className="mt-4">
        <h3 className="font-bold text-lg">Horarios disponibles para {companion.name}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
          {companion.daysReading.map((day) => (
            <div key={day} className="border rounded-lg p-4">
              <h4 className="font-semibold mb-3">{day}</h4>
              <div className="grid grid-cols-4 gap-2">
                {companion.hoursReading.map((time) => (
                  <DayTimeSlot
                    key={`${day}-${time}`}
                    day={day}
                    time={time as TimeSlot}
                    isBusy={companion.hoursBusy.includes(time as TimeSlot)}
                    onSelect={() => onSelectSchedule({day, time: time as TimeSlot})}
                    isSelected={selectedSchedule?.time === time && selectedSchedule?.day === day}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-6">
          <button onClick={onBack} className="bg-gray-200 px-4 py-2 rounded">
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelector;