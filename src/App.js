// import logo from './logo.svg';
import './App.css';
import PageLayout from './layout/pageLayout';
import Hero from './pages/hero';
import Brands from './components/brands';
import About from './pages/about';

function App() {
  return (
    <div>
      <PageLayout>
        <Hero />
        <Brands />
        <About />
      </PageLayout>
    </div>
  );
}

export default App;
