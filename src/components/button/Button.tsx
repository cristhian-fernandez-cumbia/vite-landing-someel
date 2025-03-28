import React from 'react';

interface ButtonProps {
  text: string;
  message: string;
}

const Button: React.FC<ButtonProps> = ({ text, message }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/51928717146?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;