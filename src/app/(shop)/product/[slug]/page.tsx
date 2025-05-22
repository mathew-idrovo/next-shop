import { ProductSlideShow, QuantitySelector, SelectSize } from '@/components'

import { titleFont } from '@/config/font'
import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}
export default function ({ params }: Props) {
  const { slug } = params
  const product = initialData.products.find((product) => product.slug === slug)
  if (!product) {
    notFound()
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductSlideShow images={product.images} title={product.title} />
      </div>
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased text-xl font-bold`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>
        <SelectSize
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        <QuantitySelector quantity={1} />
      </div>
    </div>
  )
}
