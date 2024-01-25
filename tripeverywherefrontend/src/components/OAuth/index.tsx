import { app } from '@/firebase/firebase'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

export function OAuth() {
  const handleSigninGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)

      console.log(result)
    } catch (error) {
      console.log('Signin with Google is not working', error)
    }
  }
  // 3:13
  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-center h-10 px-8 text-sm rounded bg-vouusar hover:bg-[#f05858] font-pop text-zinc-900"
        onClick={handleSigninGoogle}
      >
        Continue with Google
      </button>
    </div>
  )
}
