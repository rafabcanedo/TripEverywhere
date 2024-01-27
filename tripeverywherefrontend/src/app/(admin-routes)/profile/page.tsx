import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <main>
      <h1 className="text-sm">Profile: {session?.user.name}</h1>
      <button className="h-8 px-4 bg-red-300">Sair</button>
    </main>
  )
}
