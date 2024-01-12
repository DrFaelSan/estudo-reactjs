import { LabelHTMLAttributes } from 'react'

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="flex items-center justify-between text-xs text-zinc-600"
      {...props}
    />
  )
}
