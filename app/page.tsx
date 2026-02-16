import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FadeInOnScroll>
        <About />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Services />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Gallery />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Testimonials />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <References />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Contact />
      </FadeInOnScroll>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
