import {useState} from "react";
import {Display} from "./Display";
import {ButtonPanel} from "./ButtonPanel";

export const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    if(value >= 0 && value <= 9){
      setCurrentValue((prev) => (prev === '0'? value : prev + value));
    } else if (value === 'C') {
      setCurrentValue('0');
      setPreviousValue(null);
      setOperator(null);
    } else if (value === '=') {
      if (previousValue && operator){
        const result = calculateResult(previousValue, currentValue, operator);
        setCurrentValue(result);
        previousValue(null);
        setOperator(null);
      }
    } else if (value === '<-') {
      setCurrentValue(prev => prev.slice(0, -1) || 0);//удаляем последний символ и возвращаем 0 вместо пустой строки, если prev был одним символом
    } else { //если нажата кнопка оператора
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue('0');
    }
  };

  const calculateResult = (previousValue, currentValue, operator) => {
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        return num2 !==0 ? (num1 / num2).toString() : 'Error';
      default:
        return '0';
    }
  }

  return (
    <div>
      <Display value={currentValue} />
      <ButtonPanel onButtonClick={handleButtonClick}/>
    </div>
  )
}