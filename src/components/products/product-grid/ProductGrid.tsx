import { Product } from '@/interfaces'

interface ProductGridProps {
  // Define the props for the ProductGrid component here
  products: Product[]
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <div>
          <span key={product.slug}>{product.price}</span>
          <span>{product.title}</span>
        </div>
      ))}
    </div>
  )
}
