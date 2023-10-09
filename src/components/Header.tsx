import { Ticket } from 'lucide-react'

export function Header() {
  return (
    <header style={styles.container}>
      <Ticket size="32" color="#646cff" />
      <h1 style={styles.title}>Passagens Mobifácil</h1>
    </header>
  )
}

const styles = {
  container: {
    width: '100%',
    padding: '12px 32px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    backgroundColor: '#181818',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 1)',
  },
  title: {
    fontSize: '2rem',
  },
}
