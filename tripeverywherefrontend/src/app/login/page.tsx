'use client'
import * as React from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

/* 
const createUserSchema = z.object({
  email: z.string().email('Formato de email invalido'),
  password: z.string().min(6, 'O email precisa de no mínimo 6 caracteres'),
})

type CreateUserSchema = z.infer<typeof createUserSchema>
*/

export default function Login() {
  const [formData, setFormData] = useState({})

  const handleCreateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  console.log(formData)
  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
      <div className="w-[390px] bg-slate-200 shadow-md px-20 py-20">
        <h3 className="text-subtitle text-2xl font-mont text-center my-7">
          Login Page
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            onChange={handleCreateUser}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            onChange={handleCreateUser}
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
