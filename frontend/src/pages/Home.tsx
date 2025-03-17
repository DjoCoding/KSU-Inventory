import Footer from "../components/Home/Footer/Footer";
import Hero from "../components/Home/Hero/Hero";
import NavBar from "../components/Home/NavBar/NavBar";

export default function Home() {
    return(
        <div className="min-h-lvh flex flex-col">
            <NavBar />
            <Hero />
            <Footer />
        </div>
    )
}