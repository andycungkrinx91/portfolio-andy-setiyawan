import '../styles/globals.css'

import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Analytics } from '@vercel/analytics/react'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </QueryClientProvider>
  )
}
