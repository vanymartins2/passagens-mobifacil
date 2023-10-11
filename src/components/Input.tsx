import { Search } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <div
      style={{
        marginBottom: '32px',
        display: 'flex',
        gap: 8,
        alignItems: 'center',
      }}
    >
      <Search size={18} />
      <input id="input" {...rest} />
    </div>
  )
}
