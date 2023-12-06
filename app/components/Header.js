'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header () {
  const pathname = usePathname()
  const isActive = (path) => pathname === path

  return (
    <header className="w-full pt-2">
      <nav className="container mx-auto max-w-3xl flex items-center px-12">
        <div className="flex items-center mr-5">
          <a href="/" className="no-underline">
            <Image
              src="/icon-league-of-legends.svg"
              alt="League of Legends"
              width={22}
              height={22}
            />
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="/"
            className={`no-underline px-3 py-2 ${isActive('/') ? 'text-white border-b-2' : 'text-gray-400 hover:text-gray-100'}`}
          >
            Home
          </a>
          <a
            href="/champions"
            className={`no-underline px-3 py-2 ${isActive('/champions') ? 'text-white border-b-2' : 'text-gray-400 hover:text-gray-100'}`}
          >
            Champions
          </a>
        </div>
      </nav>
    </header>
  )
}
