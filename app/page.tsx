import AboutUs from "./components/AboutUs";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Losses from "./components/Losses";
import Reviews from "./components/Reviews";
import SelfCustody from "./components/SelfCustody";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Losses />
        <SelfCustody />
        <Services />
        <AboutUs />
        <Reviews />
      </Container>
    </main>
  );
}
