'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function ButtonLogout() {
  const router = useRouter()

  async function handleLogout() {
    await signOut({
      redirect: false,
    })

    router.replace('/')
  }

  return (
    <button
      className="h-8 px-4 bg-vouusar hover:bg-red-300 rounded font-pop"
      onClick={handleLogout}
    >
      Sair
    </button>
  )
}
