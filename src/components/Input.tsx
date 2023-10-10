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
      <input
        style={{
          width: '25%',
          padding: '0.6rem',
          borderRadius: '0.4rem',
          backgroundColor: '#18191A',
          border: '1px solid rgba(100, 108, 255, 0.2)',
        }}
        {...rest}
      />
    </div>
  )
}
