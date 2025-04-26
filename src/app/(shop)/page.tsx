import { titleFont } from '@/config/font'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>hola mundo</div>
      <h2 className={titleFont.className}>hola mundo </h2>
    </main>
  )
}
