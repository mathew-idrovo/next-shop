import { ProductGrid } from '@/components/products/product-grid/ProductGrid'
import { Category } from '@/interfaces'
import { initialData } from '@/seed/seed'
const seedProducts = initialData.products
interface Props {
  params: {
    id: Category
  }
}
export default function ({ params }: Props) {
  const { id } = params
  const products = seedProducts.filter((product) => product.gender === id)

  const labels: Record<Category, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
    unisex: 'Unisex',
  }

  return (
    <div>
      <h1>Category Page{id}</h1>
      <ProductGrid products={products} />
    </div>
  )
}
