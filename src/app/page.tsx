
import Navbar from "./component/navbar";
import Hero from "./component/Hero"
import About from "./About/page"
import Contact from "./Contact/page"
import Services from "./Services/page"

export default function Home() {
  return (
    <main>
    
    <Hero/>
    <About/>
    <Contact/>
    <Services/>
    </main>
  );
}
