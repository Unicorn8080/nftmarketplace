import Header from '../components/header';
import Footer from '../components/footer';

const PageLayout = ({children}) => {
  return (
    <div className="flex flex-col items-center text-white bg-primary">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default PageLayout;
