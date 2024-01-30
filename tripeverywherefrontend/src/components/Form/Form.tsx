'use client'
import ButtonLogout from '../ButtonLogout'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
} from '../../redux/user/userSlice'
import { RootState } from '@/redux/store'
import { useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.user,
  )

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (currentUser?._id) {
      try {
        dispatch(updateUserStart())

        const result = await fetch(
          `http://localhost:3333/users/update/${currentUser._id}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          },
        )
        const data = await result.json()
        if (data.success === false) {
          dispatch(updateUserFailure(data.message))
          return
        }

        dispatch(updateUserSuccess(data))
        setUpdateSuccess(true)
      } catch (error: any) {
        dispatch(updateUserFailure(error.message))
      }
    }
  }

  const handleDeleteUser = async () => {
    if (currentUser?._id) {
      try {
        dispatch(deleteUserStart())
        const result = await fetch(
          `http://localhost:3333/users/update/${currentUser.id}`,
          {
            method: 'DELETE',
          },
        )

        const data = await result.json()

        if (data.success === false) {
          dispatch(deleteUserFailure(data.message))
          return
        }

        dispatch(deleteUserSuccess(data))
      } catch (error: any) {
        dispatch(deleteUserFailure(error.message))
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Your Password"
            id="password"
            className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
            onChange={handleChange}
          />

          <div>
            <button
              disabled={loading}
              className="flex items-center justify-center text-sm rounded bg-primary font-pop text-zinc-900 hover:bg-hover h-8 px-16 mb-2"
            >
              Save
            </button>
            <ButtonLogout />
          </div>
        </div>
      </form>

      <div className="flex justify-between mt-5">
        <button
          onClick={handleDeleteUser}
          className="text-subtitle hover:text-vouusar cursor-pointer"
        >
          Delete Account
        </button>
        <ButtonLogout />
      </div>
    </div>
  )
}
