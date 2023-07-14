import '@/styles/globals.css'
import Laout from '@/components/Laout'

export default function App({ Component, pageProps }) {
  return (
    <Laout>
      <Component {...pageProps} />
    </Laout>
  )
}
