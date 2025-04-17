import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {

  return (
    <button className="button">
      <Link to="/agendar">{text}</Link>
    </button>
  );
}

export default Button;