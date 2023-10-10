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
          backgroundColor: '#18191A',
          padding: '1.5rem',
          borderRadius: '0.5rem',
        }}
      >
        <AlertDialog.Title>Cancelar Viagem</AlertDialog.Title>
        <AlertDialog.Description>
          Você tem certeza que deseja cancelar esta viagem?
        </AlertDialog.Description>

        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'flex-end',
            marginTop: '32px',
          }}
        >
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
          <AlertDialog.Action id="danger">Confirmar</AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  )
}
