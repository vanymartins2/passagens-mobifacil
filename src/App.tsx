import './styles/index.css'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { Header } from './components/Header'
import { List } from './components/List'
import { Modal } from './components/Modal'

export default function App() {
  return (
    <>
      <Header />
      <AlertDialog.Root>
        <main style={styles.container}>
          <List />
        </main>

        <Modal />
      </AlertDialog.Root>
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
