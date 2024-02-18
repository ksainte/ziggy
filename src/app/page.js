// import Image from "next/image";
import Navbar from "./components/Navbar";
import Our_Services from "./components/Our_Services";
import OurStory from "./components/OurStory";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./page.css";


export default function Home() {
  return (
    <main style={{width:'100vw'}}>
          <Navbar/>
     <div className='App_body'>
     <Header/>
         <Our_Services/>
         <OurStory/>
         <ContactUs/>

      </div>
    </main>
  );
}

