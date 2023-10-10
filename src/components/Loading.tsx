import { ClipLoader } from 'react-spinners'

interface LoadingProps {
  loadingState: boolean
}

export function Loading({ loadingState }: LoadingProps) {
  return (
    <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
      <ClipLoader loading={loadingState} color="#646cff" />
    </div>
  )
}
