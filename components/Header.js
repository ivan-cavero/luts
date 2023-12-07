'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
  const pathname = usePathname()
  const isActive = (path) => pathname === path

  return (
    <header className="w-full pt-2">
      <nav className="container mx-auto max-w-3xl flex items-center justify-between px-12">
        <div className="flex items-center gap-4">
          <a href="/" className="no-underline">
            <Image
              src="/icon-league-of-legends.svg"
              alt="League of Legends"
              width={22}
              height={22}
            />
          </a>
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

        <Link href="/login">
          <button className="flex items-center bg-buttonDark text-buttonTextWhite font-bold text-xs py-1 px-2 rounded shadow-md hover:bg-buttonAccent transition duration-300">
            <img
              src="/icons/user.svg"
              alt="User"
              className="filter invert"
              style={{ width: '16px', height: '16px' }}
            />
            <span className="ml-1">Sign Up</span>
          </button>
        </Link>
      </nav>
    </header>
  )
}
