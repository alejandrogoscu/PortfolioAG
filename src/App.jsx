import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Home />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
