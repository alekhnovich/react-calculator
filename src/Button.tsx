import React from 'react';

interface ButtonProps {
  value: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {value}
    </button>
  );
};

export default Button;
