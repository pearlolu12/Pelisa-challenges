// src/pages/Home.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
