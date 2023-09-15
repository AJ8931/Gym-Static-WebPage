
import './App.css';
import "./App.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import About from "./Components/Main/About";
import Feature_sec from './Components/Main/feature_sec';
import Hero_Sec from './Components/Main/Hero_Sec';
import Layout from './Layout';
import Testminoals from './Components/Main/Textimonials';
import 'font-awesome/css/font-awesome.min.css';
import Animation_Sec from './Components/horizontal_Animation/Animation_Sec';
import Trainers from './Components/Main/Trainers';
import Video_Section from './Components/Main/Video_Section';
import Another from './Components/Main/another';
import FAQ_Sec from './Components/Main/FAQ_Sec';
import MapChart from './Components/Main/MapChart';
import Contact from './Components/Main/Contact';
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className='bg-white overflow-x-hidden'>
      <Layout>
        <Hero_Sec />
        <Feature_sec />
        <About />
        <Trainers />
        <FAQ_Sec />
        <Contact/>
      </Layout>
    </div>
  );
}

export default App;
