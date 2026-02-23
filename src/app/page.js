import Home from "../components/Home/Home";
import Services from "../components/Services/Service";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Context from "../components/Context/Context";

export default function Main() {
  return (
    <main>
      <section id="home">
        <Header />
        <Home />
      </section>

      <section id="context">
        <Context />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
