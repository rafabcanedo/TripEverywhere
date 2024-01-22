import { InputProps } from '@/@types'

export function Input({ type, placeholder }: InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="border bg-slate-100 h-10 w-72 px-3 rounded-lg outline-none focus:border focus:border-primary"
      />
    </div>
  )
}
