import { Header } from './components/Header'
import { List } from './components/List'
import './styles/index.css'

export default function App() {
  return (
    <>
      <Header />
      <main style={styles.container}>
        <List />
      </main>
    </>
  )
}

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: 1280,
    padding: '1.45rem 1.0875rem 1.45rem',
  },
}
