import {useState} from "react";
import { Display } from "./Display";
import { ButtonPanel } from "./ButtonPanel";

export const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  return (
    <div>
      <Display value={currentValue} />
      <ButtonPanel />
    </div>
  )
}