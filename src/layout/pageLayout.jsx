import Header from '../components/header';
import Footer from '../components/footer';
import  { animateScroll as scroll } from 'react-scroll';

const PageLayout = ({children}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex flex-col items-center text-white bg-primary overflow-hidden">
      <button className="fixed bottom-[50px] right-[50px] z-[100]" onClick={scrollToTop}>top</button>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default PageLayout;
