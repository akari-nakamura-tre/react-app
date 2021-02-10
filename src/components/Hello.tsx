import Button from '@/components/Button'
import React, { useState } from 'react'

const Hello: React.FC = () => {
  const [value, setValue] = useState<number>(0)
  const minus = '−'
  const plus = '+'
  const increase = (): void => setValue(value + 1)
  const decrease = (): void => setValue(value - 1)


  return (
    <>
      <Button counter = { decrease } label={ minus } />
      <span>{value}</span>
      <Button counter = { increase}  label={ plus } />
    </>
  )
}

export default Hello
