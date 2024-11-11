import { Button } from "./Button";

export const ButtonPanel = (onButtonClick) => {
  const buttons = [
    'C', '<-', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.'
  ];

  return (
    <div>
      {buttons.map((button) => {
        <Button key={button} value={button} onClick={() => onButtonClick(button)} />
      })}
    </div>
  )
}