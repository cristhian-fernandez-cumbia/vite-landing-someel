import { Companion, Schedule, UserData } from "./../../types/agendar";

interface SummaryProps {
  companion: Companion;
  schedule: Schedule;
  userData: UserData;
  onConfirm: () => void;
  onBack: () => void;
}

const Summary = ({ companion, schedule, userData, onConfirm, onBack }: SummaryProps) => {
  return (
    <div>
      <div className="flex items-center">
        <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">4</span>
        <h2 className="ml-2 text-lg font-semibold">Resumen de tu sesión</h2>
      </div>
      
      <div className="mt-4 space-y-6">
        <div className="border rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Compañero de lectura</h3>
          <p>{companion.name}</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Horario seleccionado</h3>
          <p>{schedule.day} - {schedule.time}</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Tus datos</h3>
          <p>Nombre: {userData.name}</p>
          <p>WhatsApp: {userData.whatsapp}</p>
          <p>Email: {userData.email}</p>
        </div>
        
        <div className="flex justify-between">
          <button onClick={onBack} className="bg-gray-200 px-4 py-2 rounded">
            Volver
          </button>
          <button 
            onClick={onConfirm}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Confirmar y empezar a leer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;