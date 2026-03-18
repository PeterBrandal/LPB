import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Hours from './component/Hours';
import MenuSection from './component/MenuSection';
import QuizSection from './component/QuizSection';
import Footer from './component/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Hours />
        <MenuSection />
        <QuizSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
