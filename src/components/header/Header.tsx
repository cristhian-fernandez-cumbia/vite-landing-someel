import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo/logo_someel.png'
const Header = () => {
  return (
    <header className="flex justify-between items-center py-8">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32" /> 
        </Link>
      </div>
    </header>
  );
};

export default Header;
