import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="flex space-x-8">
        <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
        <Link href="/areas-we-cover" className="text-gray-700 hover:text-gray-900">Areas We Cover</Link>
        <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
      </div>
    </nav>
  )
}
