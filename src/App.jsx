import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Categories from './components/Categories'
import Experts from './components/Experts'
import Breeds from './components/Breeds'
import Products from './components/Products'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Experts />
        <Breeds />
        <Products />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
