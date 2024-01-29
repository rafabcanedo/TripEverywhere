'use client'
import Image from 'next/image'
import Link from 'next/link'
import Option from '../../assets/option2.svg'
import { Search, User } from 'lucide-react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Button } from '../Button'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export function Header() {
  const { currentUser } = useSelector((state: RootState) => state.user)

  return (
    <header className="bg-gray-300 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <div className="flex flex-wrap">
          <Link href="/">
            <Image src={Option} alt="Logo Company" />
          </Link>
        </div>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <Search className="text-slate-500" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link href="/">
            <li className="hidden sm:inline text-zinc-700 hover:text-subtitle hover:underline font-pop cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden sm:inline text-zinc-700 hover:text-subtitle hover:underline font-pop cursor-pointer">
              About
            </li>
          </Link>
          {currentUser ? (
            <Link href="/profile">
              <div className="flex items-center justify-center w-8 h-8 bg-subtitle shadow-sm rounded-full cursor-pointer">
                <User className="w-5 h-5" />
              </div>
            </Link>
          ) : (
            <Button
              size="lg"
              className="flex items-center justify-center relative border-2 font-medium border-primary bg-transparent py-2 px-2 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 hover:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
            >
              Sign In
            </Button>
          )}
        </ul>
      </div>
    </header>
  )
}
