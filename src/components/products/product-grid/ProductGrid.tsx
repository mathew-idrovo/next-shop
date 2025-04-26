import { Product } from '@/interfaces'
import { ProductGridItems } from './ProductGridItems'

interface ProductGridProps {
  // Define the props for the ProductGrid component here
  products: Product[]
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <ProductGridItems key={product.slug} product={product} />
      ))}
    </div>
  )
}
