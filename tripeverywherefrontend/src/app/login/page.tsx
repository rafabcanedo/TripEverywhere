'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserSchema = z.object({
  email: z.string().email('Formato de email invalido'),
  password: z.string().min(6, 'O email precisa de no mínimo 6 caracteres'),
})

type CreateUserSchema = z.infer<typeof createUserSchema>

export default function Login() {
  const { register, handleSubmit } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  })

  function handleCreateUser(data: CreateUserSchema) {
    console.log(data)
  }

  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
      <div className="w-[390px] bg-slate-200 shadow-md px-20 py-20">
        <h3 className="text-subtitle text-2xl font-mont text-center my-7">
          Login Page
        </h3>
        <form
          onSubmit={handleSubmit(handleCreateUser)}
          className="flex flex-col items-center gap-4"
        >
          <Input type="email" placeholder="Email" {...register('email')} />
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <div className="flex flex-row justify-end mr-4">
            <span className="text-subtitle">Dont have an account?</span>
            <Link href="/register">
              <p className="ml-2 text-primary">Register</p>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Button size="lg" className="px-16">
              Login
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Button className="bg-red-500 hover:bg-vouusar">
              Continue with Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
