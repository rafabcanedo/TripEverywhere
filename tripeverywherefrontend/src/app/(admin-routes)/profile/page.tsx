import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import ButtonLogout from '@/components/ButtonLogout'
import { getServerSession } from 'next-auth'

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions)

  return (
    <main>
      <h1 className="text-sm">Profile: {session?.user?.name}</h1>
      <ButtonLogout />
    </main>
  )
}
