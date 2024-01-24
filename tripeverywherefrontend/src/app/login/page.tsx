'use client'
import * as React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '@/redux/user/userSlice'
import { RootState } from '@/redux/store'

export default function Login() {
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state: RootState) => state.user)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleCreateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      dispatch(signInStart())
      const response = await fetch('http://localhost:3333/auth/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      console.log(data)

      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data))
      router.push('/')
    } catch (error: any) {
      dispatch(signInFailure(error.message))
    }
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
            <Button size="lg" className="px-16" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
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
