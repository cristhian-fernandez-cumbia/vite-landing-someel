import Button from '../button/Button';
import logo from './../../assets/images/logo/logo_someel.png'
const Header = () => {
  return (
    <header className="flex justify-between items-center py-8">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-32" /> 
      </div>
      <div className="flex items-center">
        <Button text='Inicia Gratis' message="¡Hola! Quiero encontrar a alguien que me motive y me ayude a terminar mis libros. ¿Pueden ayudarme a conseguir mi compañero de lectura?"/>
      </div>
    </header>
  );
};

export default Header;
