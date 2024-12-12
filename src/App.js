import './App.css';
import About_Section from './frontend/Home/About_Section.jsx';
import Footer from './frontend/Home/Footer.jsx';
import Home_First from './frontend/Home/Home_First.jsx';
import Knowledge from './frontend/Home/Knowledge.jsx';
import Middle_Section from './frontend/Home/Middle_Section.jsx';
import Middle_Two from './frontend/Home/Middle_Two.jsx';
import Our_Features from './frontend/Home/Our_Features.jsx';
import Testimonial from './frontend/Home/Testimonial.jsx';
function App() {
  return (
   <>
    <Home_First/>
    <About_Section/>
    <Our_Features/>
    <Testimonial/>
    <Middle_Section/>
    <Middle_Two/>
    <Knowledge/>
    <Footer/>
   </>
  );
}

export default App;
