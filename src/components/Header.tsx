import { Moon, Sun, Ticket } from 'lucide-react'
import * as Switch from '@radix-ui/react-switch'
import { useEffect, useState } from 'react'

export function Header() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <header id="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Ticket size="32" color="#646cff" />
        <h1 style={{ fontSize: '2rem' }}>Passagens Mobifácil</h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Switch.Root id="switchRoot" onClick={toggleTheme}>
          <Switch.Thumb id="switchThumb">
            {theme === 'light' ? (
              <Sun size={16} color="#121212" />
            ) : (
              <Moon size={16} color="#121212" />
            )}
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </header>
  )
}
