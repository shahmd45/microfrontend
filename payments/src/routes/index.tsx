import PaymentPage from '#/components/PaymentPage'
import { createFileRoute } from '@tanstack/react-router'
import { initiateSession } from '../services/api'

export const Route = createFileRoute('/')({
  pendingComponent: () => (
    <div className='p-14 text-center'>Loading...</div>
  ),
  pendingMs: 500,

  loader: async () => {
    return await initiateSession()
  },
  component: App,
})

function App() {
  const { refId } = Route.useLoaderData();

  console.log('refid: ', refId)

  return (
    <PaymentPage />
  )
}
