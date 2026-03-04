import HomeNavbar from '../../components/home/homeNavBar/HomeNavbar'
import Footer from '../../components/home/footer/Footer'
import Hero from '../../components/home/hero/Hero'
import Solution from '../../components/home/solution/Solution'

function Home() {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <Solution />
      <Footer/>
    </>
  )
}

export default Home