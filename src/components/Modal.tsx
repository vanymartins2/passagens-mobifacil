import * as AlertDialog from '@radix-ui/react-alert-dialog'

export function Modal() {
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay
        style={{
          position: 'fixed',
          backgroundColor: '#000',
          opacity: 0.6,
          inset: 0,
        }}
      />
      <AlertDialog.Content
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      >
        <AlertDialog.Title>Cancelar Viagem</AlertDialog.Title>
        <AlertDialog.Description>
          Você tem certeza que deseja cancelar esta viagem?
        </AlertDialog.Description>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  )
}
