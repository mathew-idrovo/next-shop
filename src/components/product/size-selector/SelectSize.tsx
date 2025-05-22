interface Props {
  selectedSize: string
  availableSizes: string[]
}

export const SelectSize = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas Disponibles </h3>
      <div className="flex flex-wrap gap-2">
        {availableSizes.map((size) => (
          <div
            key={size}
            className={` rounded-md p-2 cursor-pointer hover:text-white ${
              selectedSize === size ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  )
}
