import NavBar from '../components/Navbar/Navbar';
import Apresentation from '../components/Presentation/Presentation';
import Help from '../components/Help/Help';
import About from '../components/About/About';
import Testimony from '../components/Testimony/Testimony';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
    <NavBar />
    <Apresentation />
    <Help />
    <About />
    <Testimony />
    <Footer />
    </>
  );
}
