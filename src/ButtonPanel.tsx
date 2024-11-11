import React from 'react';
import {Button} from './Button';

interface ButtonPanelProps {
  onButtonClick: (value: string) => void;
}

export const ButtonPanel: React.FC<ButtonPanelProps> = ({ onButtonClick }) => {
  const buttons = [
    'C', '<-', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.'
  ];

  return (
    <div>
      {buttons.map((button) => (
        <Button key={button} value={button} onClick={() => onButtonClick(button)} />
      ))}
    </div>
  );
};

