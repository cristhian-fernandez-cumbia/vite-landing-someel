import { useState } from 'react';
import Header from "../components/header/Header";
import CompanionList from "../components/agendar/CompanionList";
import ScheduleSelector from "../components/agendar/ScheduleSelector";
import UserForm from "../components/agendar/UserForm";
import Summary from "../components/agendar/Summary";
import FilterControls from "../components/agendar/FilterControls";
import { Companion, Day, TimeSlot, Theme, Schedule } from "./../types/agendar";
import Loading from "./../components/loading/Loading";

const Agendar = () => {
  // Estados
  const [selectedCompanion, setSelectedCompanion] = useState<Companion | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [userData, setUserData] = useState({name: '', email: '', whatsapp: ''});
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [loading, setLoading] = useState(false);
  

  // Datos
  const days: Day[] = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  const timeSlots: TimeSlot[] = ['08:00AM', '09:00AM', '10:00AM','11:00AM', '12:00PM', '01:00PM','02:00PM', '03:00PM', '04:00PM','05:00PM', '06:00PM', '07:00PM', '08:00PM'];
  const themes: Theme[] = ['Ciencia Ficción','Romántico','Histórico','Fantasía','Misterio','Autoayuda','Biográfico'];
  const cardsData: Companion[] = [
    {
      id: 1,
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/m-3-2.webp",
      name: "Carlos Mauriola",
      daysReading: ["Lu", "Mi"],
      hoursReading: ["10:00AM", "12:00PM", "02:00PM"],
      hoursBusy: ["10:00AM", "12:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      id: 2,
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/w-1.png",
      name: "Ana Martinez",
      daysReading: ["Lu", "Ma"],
      hoursReading: ["10:00AM", "12:00PM", "04:00PM", "06:00PM"],
      hoursBusy: ["12:00PM", "04:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      id: 3,
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/w-2.webp",
      name: "Luisa Gonzalez",
      daysReading: ["Ma", "Mi"],
      hoursReading: ["02:00PM", "03:00PM", "04:00PM"],
      hoursBusy: ["02:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      id: 4,
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/w-3-2.webp",
      name: "María Guitierrez",
      daysReading: ["Lu", "Mi"],
      hoursReading: ["10:00AM", "12:00PM", "02:00PM"],
      hoursBusy: ["10:00AM", "02:00PM"],
      themes:["Ciencia Ficción"]
    },
    {
      id: 5,
      imageUrl: "https://letymind.com/wp-content/uploads/2024/10/h-1.webp",
      name: "Antony De la Cruz",
      daysReading: ["Lu", "Mi"],
      hoursReading: ["04:00PM", "05:00PM", "07:00PM"],
      hoursBusy: ["04:00PM"],
      themes:["Ciencia Ficción"]
    }
  ]
  
  const [filteredCompanions, setFilteredCompanions] = useState<Companion[]>(cardsData);
  const handleSearch = (daysSelected: Day[], timesSelected: TimeSlot[], themesSelected: Theme[]) => {
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
    
      setFilteredCompanions(filtered);
      setSelectedCompanion(null);
      setSelectedSchedule(null);
      setLoading(false);
    }, 200);
  };
  return (
    <div>
      <Header />
      <main className="pb-3 flex flex-col items-center justify-center mb-2">
        <h1 className="text-center text-2xl font-bold mb-2">Encuentra a tu compañero</h1>
        <h1 className="text-center text-2xl font-bold">de Lectura Ideal</h1>
      </main>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Paso 1: Seleccionar compañero */}
        {currentStep >= 1 && (
          <div className="mb-8">
            <div className="flex items-center mb-5">
              <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">1</span>
              <h2 className="ml-2 text-lg font-semibold">Seleccione a tu compañero</h2>
            </div>
            
            <FilterControls 
              days={days}
              timeSlots={timeSlots}
              themes={themes}
              onSearch={handleSearch}
            />
            
            {loading ? (
              <Loading />
            ) : filteredCompanions.length === 0 ? (
              <div className="text-center py-4 text-gray-100 text-lg">
                No hay compañeros con esos filtros
              </div>
            ) : (
              <CompanionList
                selectedCompanion={selectedCompanion}
                onSelectCompanion={(companion) => {
                  setSelectedCompanion(companion);
                  setCurrentStep(2);
                }}
                setSelectedSchedule={setSelectedSchedule}
                companions={cardsData}
              />
          )}
          </div>
        )}

        {/* Paso 2: Seleccionar horario */}
        {currentStep >= 2 && selectedCompanion && (
          <ScheduleSelector 
            companion={selectedCompanion}
            onSelectSchedule={(schedule: Schedule) => {
              setSelectedSchedule(schedule);
              setCurrentStep(3);
            }}
            selectedSchedule={selectedSchedule}
            onBack={() => setCurrentStep(1)}
          />
        )}

        {/* Paso 3: Formulario de usuario */}
        {currentStep >= 3 && selectedCompanion && selectedSchedule && (
          <UserForm 
            userData={userData}
            onChange={setUserData}
            onSubmit={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        )}

        {/* Paso 4: Resumen */}
        {currentStep === 4 && selectedCompanion && selectedSchedule && (
          <Summary 
            companion={selectedCompanion}
            schedule={selectedSchedule}
            userData={userData}
            onConfirm={() => {
              // Enviar datos al backend
              console.log({
                companion: selectedCompanion,
                schedule: selectedSchedule,
                user: userData
              });
            }}
            onBack={() => setCurrentStep(3)}
          />
        )}
      </div>
    </div>
  );
};

export default Agendar;