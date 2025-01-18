import '../src/index.css'
import Navigation from '../src/components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
