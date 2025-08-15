// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BestProperties from './components/BestProperties/BestProperties';
import Elements from './components/Elements/Elements';
import FindProperties from './components/FindProperties/FindProperties';
import HeroNavbar from './components/Navbar/HeroNavbar';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AddPropertyForm from './pages/Add-property'; 
import './index.css';
import Luxury from './components/Luxury/Luxury';
import Testimonial from './components/Testimonial/Testimonial';
import ArticleSection from './components/ArticleSection/ArticleSection';
import TabList from './components/TabList/TabList';
import Agent from './components/Agent/Agent';
import Footer from './components/Footer/Footer';
import Companies from './components/companies/Companies';

// Home page component
function Home() {
  return (
    <>
      <HeroNavbar />
      <Elements />
      <FindProperties />
      <WhyChooseUs />
      <BestProperties />
  <Luxury />
          <Testimonial />
      <Companies />
       <ArticleSection />
           <TabList />
        <Agent />
        <Footer />
   
     
      
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-property" element={<AddPropertyForm />} />
      
      
      </Routes>
      </>

  ); 
}

export default App;
