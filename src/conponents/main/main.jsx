import React, { useState } from "react";
import "./main.css";
import { IoLogoGithub } from "react-icons/io5";
import { FiLink2 } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

import groovyWalkAnimation from "../../../public/ani/6.json";
import Lottie from "lottie-react";

function Main() {
  const [colone, setColone] = useState("");

  const myprojects = [
    {
      id: 1,
      title: "React & Bootstrap Project",
      category: ["react", "bootstrap"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
    },
    {
      id: 2,
      title: "React Project2",
      category: ["react"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
    },
    {
      id: 3,
      title: "CSS Project",
      category: ["css"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
    },
    {
      id: 4,
      title: "React Project",
      category: ["react"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
    },
  ];
  
  const filtered = myprojects.filter(
    (item) => colone === "" || item.category.some((cat) => cat === colone)
  );

  return (
    <main id="Projects" className="flex ">
      <div className="left-section1 flex">
      <div className="animation1 flex">
      <h1>
My Projects
         </h1>
         <Lottie
           animationData={groovyWalkAnimation}
           loop={true}
           style={{ height: 100,flexGrow:1 }}
         />
         
       </div>
        <button
          onClick={() => {
            setColone("");
          }}
          className={colone === "" ? "btn1" : null}
        >
          All
        </button>
        <button
          onClick={() => {
            setColone("css");
          }}
          className={colone === "css" ? "btn1" : null}
        >
          CSS
        </button>
        <button
          onClick={() => {
            setColone("react");
          }}
          className={colone === "react" ? "btn1" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setColone("bootstrap");
          }}
          className={colone === "bootstrap" ? "btn1" : null}
        >
          Bootstrap
        </button>
      </div>

      <div className="right-section2 flex">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.article
  layout
  initial={{ scale: 0, opacity: 0 }}  // Ajouter une animation d'opacité
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0, opacity: 0 }}
  transition={{ type: "spring", stiffness: 50, damping: 15, duration: 0.5 }}
  key={item.id}
  className="card"
>

  <img width={230} src={item.url} alt={item.url} />
  <div style={{ width: "230px" }} className="box">
    <h1>{item.title}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacinia
      felis, at ultricies risus. Proin nec massa vel turpis consectetur
      pulvinar.
    </p>
    <div className="flex icons">
      <div className="logos">
        <FiLink2 className="icon-share" />
        <IoLogoGithub className="icon-git" />
      </div>
      <a href="" className="more">
        <span>
          more <BsArrowRightShort />
        </span>
      </a>
    </div>
  </div>
</motion.article>

          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default Main;
