import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
      <div className="w-[390px] bg-slate-200 shadow-md px-20 py-20">
        <h3 className="text-subtitle text-2xl font-mont text-center my-7">
          Register Page
        </h3>
        <form className="flex flex-col items-center gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <div className="flex flex-row justify-end mr-4">
            <span className="text-subtitle">Have an account?</span>
            <Link href="/login">
              <p className="ml-2 text-primary">Login</p>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Button size="lg" className="px-16">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
