import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Experience } from '../components/Experience'
import { Achievements } from '../components/Achievements'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { BackToTop } from '../components/BackToTop'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
