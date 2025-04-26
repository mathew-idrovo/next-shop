import { ProductGrid } from '@/components/products/product-grid/ProductGrid'
import { titleFont } from '@/config/font'
import { initialData } from '@/seed/seed'

const products = initialData.products
export default function Home() {
  return (
    <main>
      <div>hola mundo</div>
      <h2 className={titleFont.className}>hola mundo </h2>
      <ProductGrid products={products} />
    </main>
  )
}
