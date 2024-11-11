

export const Button = ({value, onClick}) => {
  return (
    <button onClick={() => onClick(value)} className="button">
      {value}
    </button>
  )
}