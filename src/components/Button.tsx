import React from 'react'

const Button: React.FC<{ counter: () => void, label: string }> = ({ counter, label }) => {
  return (
    <>
      <button onClick={() => counter()}>{ label }</button>
    </>
  )
}
export default Button
