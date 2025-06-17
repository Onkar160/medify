import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/HeroSlider/Hero"
import Offers from "../components/Sections/Offers/Offers"



export default function Home() {
    return (
        <div>
            <NavBar background="linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)" />
            <Hero />
            <Offers />
            <Footer />
        </div>
    )
}