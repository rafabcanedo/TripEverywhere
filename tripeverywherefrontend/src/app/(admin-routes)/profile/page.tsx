import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { Button } from '@/components/Button'
import ButtonLogout from '@/components/ButtonLogout'
import { getServerSession } from 'next-auth'

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions)

  return (
    <main className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-mono text-center my-7">Profile</h1>

      <form>
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
          />
          <input
            type="password"
            placeholder="Your Password"
            id="password"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
          />

          <div>
            <Button className="h-8 px-16 mb-2">Save</Button>
            <ButtonLogout />
          </div>
        </div>
      </form>

      <div className="flex justify-between mt-5">
        <span>Delete Account</span>
        <ButtonLogout />
      </div>
    </main>
  )
}
