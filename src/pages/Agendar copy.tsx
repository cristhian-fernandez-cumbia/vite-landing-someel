import CardSchedule from "../components/card/CardSchedule"
import Header from "../components/header/Header"
import { useEffect, useRef, useState } from 'react'
import Loading from "../components/loading/Loading"

const Agendar = () => {
  const days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']
  const hours = [
    '8:00AM', '9:00AM', '10:00AM',
    '11:00AM', '12:00PM', '1:00PM',
    '2:00PM', '3:00PM', '4:00PM',
    '5:00PM', '6:00PM', '7:00PM', '8:00PM'
  ]
  const themes = [
    'Ciencia Ficción',
    'Romántico',
    'Histórico',
    'Fantasía',
    'Misterio',
    'Autoayuda',
    'Biográfico'
  ]

  const [openSelect, setOpenSelect] = useState<string | null>(null)
  const [daysSelected, setDaysSelected] = useState<string[]>([])
  const [timesSelected, setTimesSelected] = useState<string[]>([])
  const [themesSelected, setThemesSelected] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectedCompanion, setSelectedCompanion] = useState<{
    name: string;
    daysReading: string[];
    hoursReading: string[];
    themes: string[];
  } | null>(null);

  const toggleSelection = (value: string, type: string) => {
    if (type === 'day') {
      setDaysSelected(prev => 
        prev.includes(value) 
          ? prev.filter(d => d !== value) 
          : [...prev, value]
      )
    } else if (type === 'time') {
      setTimesSelected(prev => 
        prev.includes(value)
          ? prev.filter(t => t !== value)
          : [...prev, value]
      )
    } else {
      setThemesSelected(prev => 
        prev.includes(value)
          ? prev.filter(t => t !== value)
          : [...prev, value]
      )
    }
  }

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = cardsData.filter(card => {
        const matchDays = daysSelected.length === 0 || 
          daysSelected.some(day => card.daysReading.includes(day));
        
        const matchTimes = timesSelected.length === 0 || 
          timesSelected.some(time => card.hoursReading.includes(time));
        
        const matchThemes = themesSelected.length === 0 || 
          themesSelected.some(theme => card.themes.includes(theme));
    
        return matchDays && matchTimes && matchThemes;
      });
    
      setFilteredCards(filtered);
      setLoading(false);
    }, 200);
    console.log({
      days: daysSelected,
      times: timesSelected,
      themes: themesSelected
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenSelect(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const removeTag = (value: string, type: string) => {
    if (type === 'day') {
      setDaysSelected(prev => prev.filter(d => d !== value))
    } else if (type === 'time') {
      setTimesSelected(prev => prev.filter(t => t !== value))
    } else {
      setThemesSelected(prev => prev.filter(t => t !== value))
    }
  }

  const cardsData = [
    {
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/m-3-2.webp",
      name: "Carlos Mauriola",
      daysReading: ["Lu", "Mi"],
      hoursReading: ["10:00AM", "12:00PM", "02:00PM"],
      hoursBusy: ["10:00AM", "12:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/w-1.png",
      name: "Ana Martinez",
      daysReading: ["Lu", "Ma"],
      hoursReading: ["10:00AM", "12:00PM", "04:00PM", "06:00PM"],
      hoursBusy: ["12:00PM", "04:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/w-2.webp",
      name: "Luisa Gonzalez",
      daysReading: ["Ma", "Mi"],
      hoursReading: ["02:00PM", "03:00PM", "04:00PM"],
      hoursBusy: ["02:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/w-3-2.webp",
      name: "María Guitierrez",
      daysReading: ["Lu", "Mi"],
      hoursReading: ["10:00AM", "12:00PM", "02:00PM"],
      hoursBusy: ["10:00AM", "02:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/h-1.webp",
      name: "Antony De la Cruz",
      daysReading: ["Lu", "Mi"],
      hoursReading: ["04:00PM", "05:00PM", "07:00PM"],
      hoursBusy: ["04:00PM"],
      themes:["Ciencia Ficción"]
    }
  ];  
  const [filteredCards, setFilteredCards] = useState(cardsData);

  return (
    <div>
      <Header />
      <main className="py-3 flex flex-col items-center justify-center mb-2">
        <h1 className="text-center text-2xl font-bold mb-2">Encuentra a tu compañero</h1>
        <h1 className="text-center text-2xl font-bold">de Lectura Ideal</h1>
      </main>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center mb-5">
          <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">1</span>
          <h2 className="ml-2 text-lg font-semibold">Seleccione a tu compañero</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-4" ref={dropdownRef}>
          <div className="flex-1">
            <div 
              className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors relative"
              onClick={() => setOpenSelect(openSelect === 'days' ? null : 'days')}
            >
              <div className="flex justify-between items-center">
                <span className={`font-medium text-[14px] ${daysSelected.length > 0 ? 'hidden' : 'block'}`}>
                  Días de la semana
                </span>
                <div className="text-sm max-w-[200px] truncate font-medium text-white">
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

          {/* Selector de Horas */}
          <div className="flex-1">
            <div 
              className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors relative"
              onClick={() => setOpenSelect(openSelect === 'times' ? null : 'times')}
            >
              <div className="flex justify-between items-center">
                <span className={`font-medium text-[14px] ${timesSelected.length > 0 ? 'hidden' : 'block'}`}>
                  Horario
                </span>
                <div className="text-sm max-w-[200px] truncate font-medium text-white">
                  {timesSelected.join(', ')}
                </div>
              </div>
              
              {openSelect === 'times' && (
                <div className="absolute left-0 right-0 top-[50px] bg-white z-10 mt-2 p-4 border rounded-lg shadow-lg">
                  <div className="grid grid-cols-3 gap-2">
                    {hours.map(time => (
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

          {/* Selector de Temáticas */}
          <div className="flex-1">
            <div 
              className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors relative"
              onClick={() => setOpenSelect(openSelect === 'themes' ? null : 'themes')}
            >
              <div className="flex justify-between items-center">
                <span className={`font-medium text-[14px] ${themesSelected.length > 0 ? 'hidden' : 'block'}`}>
                  Temática
                </span>
                <div className="max-w-[200px] truncate font-medium text-white text-[14px]">
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
            onClick={handleSearch}
            className="bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium px-5 h-14 self-center hover:cursor-pointer"
          >
            Buscar Compañero
          </button>
        </div>

        {([...daysSelected, ...timesSelected, ...themesSelected].length > 0) && (
          <div>
            <div className="flex flex-wrap gap-2 items-center">
              {[...daysSelected, ...timesSelected, ...themesSelected].map((filter, index) => (
                <div 
                  key={index}
                  className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {filter}
                  <button 
                    onClick={() => {
                      if (daysSelected.includes(filter)) {
                        removeTag(filter, 'day')
                      } else if (timesSelected.includes(filter)) {
                        removeTag(filter, 'time')
                      } else {
                        removeTag(filter, 'theme')
                      }
                    }}
                    className="hover:bg-white/20 rounded-full text-[15px] hover:cursor-pointer w-5 h-5  flex justify-center items-center button-delete pb-[1px] pr-[1px] font-[600]"
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

        <div className="mt-4">
          {loading ? (
            <Loading />
          ) : filteredCards.length === 0 ? (
            <div className="text-center py-4 text-gray-100 text-lg">
              No hay compañeros con esos filtros
            </div>
          ) : (
            <div className="flex flex-wrap gap-5">
              {filteredCards.map((card, index) => (
                <CardSchedule
                  key={`${card.name}-${index}`}
                  imageUrl={card.imageUrl}
                  name={card.name}
                  index={index}
                  daysReading={card.daysReading}
                  hoursReading={card.hoursReading}
                  themes={card.themes}
                  isSelected={selectedCompanion?.name === card.name}
                  onSelect={() => setSelectedCompanion({
                    name: card.name,
                    daysReading: card.daysReading,
                    hoursReading: card.hoursReading,
                    themes: card.themes
                  })}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-4">
        <div className="flex items-center">
          <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">2</span>
          <h2 className="ml-2 text-lg font-semibold">Escoge tu horario</h2>
        </div>
        
        {selectedCompanion && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-800">
            <div className="flex items-center">
              <h3 className="font-bold text-lg m-0 pb-[3px]">Compañero seleccionado:</h3>
              <p className="pt-[1px] ml-1">{selectedCompanion.name}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold">Días disponibles:</h4>
                <p>{selectedCompanion.daysReading.join(', ')}</p>
              </div>
              <div>
                <h4 className="font-semibold">Horarios disponibles:</h4>
                <p>{selectedCompanion.hoursReading.join(', ')}</p>
              </div>
              <div className="font-semibold">
                <h4 className="font-semibold">Temáticas:</h4>
                <p>{selectedCompanion.themes.join(', ')}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-4">
        <div className="flex items-center">
          <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">3</span>
          <h2 className="ml-2 text-lg font-semibold">Registra tus datos</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-4">
        <div className="flex items-center">
          <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">4</span>
          <h2 className="ml-2 text-lg font-semibold">Resumen de tu sesion y empieza a leer</h2>
        </div>
      </div>
    </div>
  )
}

export default Agendar