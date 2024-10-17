import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./conponents/contact/contact";
import Footer from "./conponents/footer/Footer";
import Header from "./conponents/header/header";
import Hero from "./conponents/hero/hero";
import Main from "./conponents/main/main";
import { IoIosArrowRoundUp } from "react-icons/io";
import Cert from "./conponents/cert/cert";

import Lottie from "lottie-react";
import loadingAnimation from "../public/ani/12.json"; 
function App() {
  const [dark, setDark] = useState("light"); // Set initial state
  const [button, setButton] = useState(false); // Set initial state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setButton(true);
      } else {
        setButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run only once on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Changer l'état de chargement après 1000 ms
      setIsVisible(true); // Rendre le contenu visible après le chargement
    }, 2000); // Délai de 1000 ms

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté
  }, []);

  return (
    <>
    {isLoading ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    ) : (
    <div id="header" className="container">
      <Header />
      <Hero />
      <div className="border"> </div>
      <Main />
      <div className="border"> </div>
      <Cert/>
      <div className="border"> </div>
      <Contact />
      <div className="border"> </div>
      <Footer />
      <a
        href="#header"
        style={{ opacity: button ? "1" : "0", transition: "1s" }}
      >
        <IoIosArrowRoundUp className="scrolle" />
      </a>
      
    </div>
    )}
    </>
  );
}

export default App;
