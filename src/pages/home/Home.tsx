import HomeNavbar from '../../components/home/homeNavBar/HomeNavbar'
import Footer from '../../components/home/footer/Footer'
import Hero from '../../components/home/hero/Hero'
import Solution from '../../components/home/solution/Solution'
import Cta from '../../components/home/cta/Cta'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/authcontext/AuthContext'
import { useContext } from 'react'
import { ToastAlerta } from '../../utils/ToastAlert'

function Home() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  if (user.token !== "") {
    navigate("/produtos")
    ToastAlerta(`Seja bem-vindo de volta ${user.nome}!`, "info")
  }

  return (
    <>
      <HomeNavbar />
      <Hero />
      <Solution />
      <Cta />
      <Footer/>
    </>
  )
}

export default Home