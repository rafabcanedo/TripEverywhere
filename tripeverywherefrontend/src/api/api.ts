import axios from 'axios'

interface IPreUser {
  name: string
  email: string
  password: string
}

export interface IUserProps extends IPreUser {
  currentUser: null
  error: null
  loading: boolean
  _id: string
}

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const updateUser = (user: IUserProps) => {
  api.patch(`users/update/${user._id}`, {
    name: user.name,
    email: user.email,
    password: user.password,
  })
}
