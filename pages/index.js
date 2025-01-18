import Head from 'next/head'
import Navigation from '../src/components/Navigation'
import Hero from '../src/components/Hero'
import Services from '../src/components/Services'
import Reviews from '../src/components/Reviews'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Roofing Services</title>
        <meta name="description" content="Professional roofing services" />
      </Head>
      
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <Reviews />
      </main>
      
      <Footer />
    </>
  )
}
