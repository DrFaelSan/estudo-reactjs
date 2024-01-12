import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={props.name}
      className="flex-1 rounded border border-zinc-300 px-3 py-1 text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-950"
      {...register(props.name)}
      {...props}
    />
  )
}
