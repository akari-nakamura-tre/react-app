import React from 'react'

type Props = {
  label: string
  counter: () => void
}

const Button: React.FC<Props> = ({ counter, label }) => {
  return (
    <>
      <button onClick={() => counter()}>{ label }</button>
    </>
  )
}
export default Button
