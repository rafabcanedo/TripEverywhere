import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { Button } from '@/components/Button'
import ButtonLogout from '@/components/ButtonLogout'
import { getServerSession } from 'next-auth'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
} from '../../../redux/user/userSlice'
import { RootState } from '@/redux/store'
import { useState } from 'react'
import Form from '@/components/Form/Form'

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions)
  /* const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.user,
  )

  const dispatch = useDispatch() */

  /*
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      dispatch(updateUserStart())
      const result = await fetch(`http://localhost:3333/users/update/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
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

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart())
      const result = await fetch(`http://localhost:3333/users/update/${id}`, {
        method: 'DELETE',
      })

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
 */
  return (
    <main className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-mono text-center my-7">Profile</h1>
      <Form />
    </main>
  )
}
