'use client'
import { CircleMinus, CirclePlus } from 'lucide-react'
import { useState } from 'react'

interface Props {
  quantity: number
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity)
  const onQuantityChange = (value: number) => {
    if (count + value < 0) return
    setCount(count + value)
  }
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onQuantityChange(-1)}>
        <CircleMinus size={30} />{' '}
      </button>
      <span className="w-20 ms-3 px-5 bg-gray-100 text-center rounded-lg">
        {count}
      </span>
      <button onClick={() => onQuantityChange(+1)}>
        <CirclePlus />
      </button>
    </div>
  )
}
