import HomeNavbar from "../../components/home/homeNavBar/HomeNavbar";
import Footer from "../../components/home/footer/Footer";
import Hero from "../../components/home/hero/Hero";
import Solution from "../../components/home/solution/Solution";
import Cta from "../../components/home/cta/Cta";
import HomeProducts from "../../components/home/homeProducts/HomeProducts";

function Home() {
  

  return (
    <>
      <HomeNavbar />
      <Hero />
      <Solution />
      <HomeProducts />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
