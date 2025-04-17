import { Link } from 'react-router-dom';
import Button from '../button/Button';
import logo from './../../assets/images/logo/logo_someel.png'
const HeaderHome = () => {
  return (
    <header className="flex justify-between items-center py-8">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32" /> 
        </Link>
      </div>
      <div className="flex items-center">
        <Button text='Inicia Gratis'/>
      </div>
    </header>
  );
};

export default HeaderHome;
