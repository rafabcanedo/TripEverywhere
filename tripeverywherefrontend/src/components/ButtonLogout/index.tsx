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
      className="h-6 px-8 text-white bg-vouusar hover:bg-red-300 rounded"
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}
