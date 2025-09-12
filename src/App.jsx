import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
