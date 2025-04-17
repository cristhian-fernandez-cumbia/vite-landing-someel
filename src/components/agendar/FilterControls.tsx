// src/components/shared/FilterControls/index.tsx
import { useState, useRef, useEffect } from 'react';
import { Day, TimeSlot, Theme } from "./../../types/agendar";

interface FilterControlsProps {
  days: Day[];
  timeSlots: TimeSlot[];
  themes: Theme[];
  onSearch: (days: Day[], times: TimeSlot[], themes: Theme[]) => void;
}

const FilterControls = ({ days, timeSlots, themes, onSearch }: FilterControlsProps) => {
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [daysSelected, setDaysSelected] = useState<Day[]>([]);
  const [timesSelected, setTimesSelected] = useState<TimeSlot[]>([]);
  const [themesSelected, setThemesSelected] = useState<Theme[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSelection = (value: Day | TimeSlot | Theme, type: string) => {
    if (type === 'day') {
      setDaysSelected(prev => 
        prev.includes(value as Day) 
          ? prev.filter(d => d !== value) 
          : [...prev, value as Day]
      );
    } else if (type === 'time') {
      setTimesSelected(prev => 
        prev.includes(value as TimeSlot)
          ? prev.filter(t => t !== value)
          : [...prev, value as TimeSlot]
      );
    } else {
      setThemesSelected(prev => 
        prev.includes(value as Theme)
          ? prev.filter(t => t !== value)
          : [...prev, value as Theme]
      );
    }
  };

  const removeTag = (value: Day | TimeSlot | Theme, type: string) => {
    if (type === 'day') {
      setDaysSelected(prev => prev.filter(d => d !== value));
    } else if (type === 'time') {
      setTimesSelected(prev => prev.filter(t => t !== value));
    } else {
      setThemesSelected(prev => prev.filter(t => t !== value));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenSelect(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-4 mb-4" >
      <div className='flex flex-row gap-4' ref={dropdownRef}>
        <div className="flex-1">
          <div 
            className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors relative"
            onClick={() => setOpenSelect(openSelect === 'days' ? null : 'days')}
          >
            <div className="flex justify-between items-center">
              <span className={`font-medium text-[14px] ${daysSelected.length > 0 ? 'hidden' : 'block'}`}>
                Días de la semana
              </span>
              <div className="text-sm max-w-[200px] truncate font-medium">
                {daysSelected.join(', ')}
              </div>
            </div>
            
            {openSelect === 'days' && (
              <div className="absolute left-0 right-0 top-[50px] bg-white z-10 mt-2 w-96 border rounded-lg shadow-lg px-3 py-3">
                <div className="grid grid-cols-7 gap-1">
                  {days.map(day => (
                    <button
                      key={day}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelection(day, 'day');
                      }}
                      className={`h-10 w-10 rounded-full flex items-center justify-center hover:cursor-pointer
                        ${daysSelected.includes(day) 
                          ? 'bg-primary text-white border-0' 
                          : 'bg-gray-100 hover:bg-gray-200 border-[1px] border-blue-950 text-blue-950'}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div 
            className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors relative"
            onClick={() => setOpenSelect(openSelect === 'times' ? null : 'times')}
          >
            <div className="flex justify-between items-center">
              <span className={`font-medium text-[14px] ${timesSelected.length > 0 ? 'hidden' : 'block'}`}>
                Horario
              </span>
              <div className="text-sm max-w-[200px] truncate font-medium">
                {timesSelected.join(', ')}
              </div>
            </div>
            
            {openSelect === 'times' && (
              <div className="absolute left-0 right-0 top-[50px] bg-white z-10 mt-2 p-4 border rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelection(time, 'time');
                      }}
                      className={`p-1 text-[13px] xl:text-[14px] rounded-full flex items-center justify-center hover:cursor-pointer 
                        ${timesSelected.includes(time) 
                          ? 'bg-primary text-white border-0' 
                          : 'bg-gray-100 hover:bg-gray-200 border-[1px] border-blue-950 text-blue-950'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div 
            className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors relative"
            onClick={() => setOpenSelect(openSelect === 'themes' ? null : 'themes')}
          >
            <div className="flex justify-between items-center">
              <span className={`font-medium text-[14px] ${themesSelected.length > 0 ? 'hidden' : 'block'}`}>
                Temática
              </span>
              <div className="max-w-[200px] truncate font-medium text-[14px]">
                {themesSelected.join(', ')}
              </div>
            </div>
            
            {openSelect === 'themes' && (
              <div className="absolute left-0 right-0 top-[50px] bg-white z-10 mt-2 p-4 border rounded-lg shadow-lg max-h-64 overflow-y-auto scrollbar-custom">
                {themes.map(theme => (
                  <button
                    key={theme}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelection(theme, 'theme');
                    }}
                    className={`w-full p-3 rounded-lg flex items-center mb-2 hover:cursor-pointer
                      ${themesSelected.includes(theme) 
                        ? 'bg-primary text-white border-0' 
                        : 'bg-gray-100 hover:bg-gray-200 border-[1px] border-blue-950 text-blue-950'}`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button 
          onClick={() => onSearch(daysSelected, timesSelected, themesSelected)}
          className="bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium px-5 h-14 self-center hover:cursor-pointer"
        >
          Buscar Compañero
        </button>
      </div>
      {([...daysSelected, ...timesSelected, ...themesSelected].length > 0) && (
        <div className="w-full">
          <div className="flex flex-wrap gap-2 items-center">
            {[...daysSelected, ...timesSelected, ...themesSelected].map((filter, index) => (
              <div 
                key={index}
                className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2"
              >
                {filter}
                <button 
                  onClick={() => {
                    if (daysSelected.includes(filter as Day)) {
                      removeTag(filter, 'day');
                    } else if (timesSelected.includes(filter as TimeSlot)) {
                      removeTag(filter, 'time');
                    } else {
                      removeTag(filter, 'theme');
                    }
                  }}
                  className="hover:bg-white/20 rounded-full text-[15px] hover:cursor-pointer w-5 h-5 flex justify-center items-center button-delete pb-[1px] pr-[1px] font-[600]"
                >
                  x
                </button>
              </div>
            ))}
            <button 
              onClick={() => {
                setDaysSelected([]);
                setTimesSelected([]);
                setThemesSelected([]);
              }}
              className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2 hover:cursor-pointer"
            >
              Eliminar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterControls;