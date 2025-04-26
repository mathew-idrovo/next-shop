import { ProductGrid } from '@/components/products/product-grid/ProductGrid'
import { titleFont } from '@/config/font'
import { initialData } from '@/seed/seed'

const products = initialData.products
export default function Home() {
  return (
    <main>
      <ProductGrid products={products} />
    </main>
  )
}
