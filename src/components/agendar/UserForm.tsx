import { UserData } from "./../../types/agendar";

interface UserFormProps {
  userData: UserData;
  onChange: (data: UserData) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const UserForm = ({ userData, onChange, onSubmit, onBack }: UserFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="flex items-center">
        <span className="w-9 h-9 flex bg-primary rounded-lg justify-center items-center font-bold">3</span>
        <h2 className="ml-2 text-lg font-semibold">Registra tus datos</h2>
      </div>
      
      <div className="mt-4">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block">WhatsApp</label>
            <input
              type="tel"
              name="whatsapp"
              value={userData.whatsapp}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="block">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </form>
        
        <div className="flex justify-between mt-6">
          <button onClick={onBack} className="bg-gray-200 px-4 py-2 rounded">
            Volver
          </button>
          <button 
            onClick={onSubmit}
            className="bg-primary text-white px-4 py-2 rounded"
            disabled={!userData.name || !userData.whatsapp || !userData.email}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;