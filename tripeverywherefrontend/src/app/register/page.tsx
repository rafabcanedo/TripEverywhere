'use client'
import * as React from 'react'
import { useState } from 'react'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function Register() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCreateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch('http://localhost:3333/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    console.log(data)
  }

  console.log(formData)
  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
      <div className="w-[390px] bg-slate-200 shadow-md px-20 py-20">
        <h3 className="text-subtitle text-2xl font-mont text-center my-7">
          Register Page
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <input
            id="username"
            type="text"
            placeholder="Your name"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            onChange={handleCreateUser}
          />
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
