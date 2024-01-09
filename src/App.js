// import logo from './logo.svg';
import './App.css';
import PageLayout from './layout/pageLayout';
import Hero from './pages/hero';
import Brands from './components/brands';
import About from './pages/about';
import Find from './pages/find';
import Faq from './pages/faq';


function App() {
      
  return (
    <div>
      <PageLayout>
        <Hero />
        <Brands />
        <About />
        <Find />
        <div className="w-[100vw] h-[1px] mt-[90px]">
          <div className="w-[100vw] h-[1px] [background:linear-gradient(180deg,rgb(255,64,96)_0%,rgb(255,128.56,196.74)_52.08%,rgb(109,94,234)_100%)]"></div>
        </div>
        <Faq />
      </PageLayout>
    </div>
  );
}

export default App;
