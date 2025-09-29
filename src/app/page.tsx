import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import WhyWorkWithMe from '@/components/why-work-with-me';
import Services from '@/components/services';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Particles from '@/components/particles';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Particles />
      <Header />
      <main>
        <Hero />
        <About />
        <WhyWorkWithMe />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
