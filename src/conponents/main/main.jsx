import React, { useState } from "react";
import "./main.CSS";
import { IoLogoGithub } from "react-icons/io5";
import { FiLink2 } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import groovyWalkAnimation from "../../../public/ani/6.json";
import Lottie from "lottie-react";
import TypingEffect from "react-typing-effect"; // Importer la bibliothèque

function Main() {
  const [colone, setColone] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const myprojects = [
    {
      id: 1,
      title: "Pixi-media",
      category: ["react", "bootstrap"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "A media management platform built with React and Bootstrap, allowing users to upload and share media content easily.",
    },
    {
      id: 2,
      title: "Authentification JWT",
      category: ["react", "bootstrap", "Node", "MongoDB", "Express"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "A secure authentication system using JSON Web Tokens (JWT) for user authentication in a MERN stack application.",
    },
    {
      id: 3,
      title: "CRUD avec Laravel",
      category: ["Laravel", "CSS", "PHP", "MySQL"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "A CRUD application built with Laravel, showcasing a user-friendly interface for managing data in a MySQL database.",
    },
    {
      id: 4,
      title: "Frontend E-Commerce Administration",
      category: ["react", "bootstrap", "CSS"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "An admin panel for managing an e-commerce platform, built using React and Bootstrap for responsive design.",
    },
    {
      id: 5,
      title: "Frontend E-Commerce Client",
      category: ["react", "bootstrap", "CSS"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "A user-friendly frontend for an e-commerce site, built with React and styled with Bootstrap.",
    },
    {
      id: 6,
      title: "Backend E-Commerce",
      category: ["Node", "MongoDB", "Express"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "The backend of an e-commerce platform using Node.js, Express, and MongoDB for data management.",
    },
    {
      id: 7,
      title: "AgriAdvisorPro",
      category: ["react", "bootstrap", "CSS", "Node", "MongoDB", "Express"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "A web application providing agricultural advice and resources, developed with a MERN stack.",
    },
    {
      id: 8,
      title: "BusTun",
      category: ["react", "bootstrap", "CSS"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "An application designed for bus tracking and management, built using React and Bootstrap.",
    },
    {
      id: 9,
      title: "Guapofood",
      category: ["HTML", "PHP", "CSS"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      description:
        "A food delivery platform built with HTML, PHP, and CSS, providing users with a seamless ordering experience.",
    },
  ];

  const filtered = myprojects.filter(
    (item) => colone === "" || item.category.some((cat) => cat === colone)
  );

  // Get unique categories (institutions)
  const institutions = [
    ...new Set(myprojects.flatMap((project) => project.category)),
  ];

  return (
    <main id="Projects" className="flex">
      <div className="left-section1 flex">
        <div className="animation1 flex">
          <h1 className="typing">My Projects</h1>
          <Lottie
            animationData={groovyWalkAnimation}
            loop={true}
            style={{ height: 100, flexGrow: 1 }}
          />
        </div>
        <button
          onClick={() => setColone("")}
          className={colone === "" ? "btn1" : null}
        >
          All
        </button>
        {institutions.map((institution) => (
          <button
            key={institution}
            onClick={() => setColone(institution)} // Fixed to use setColone
            className={colone === institution ? "btn1" : ""}
          >
            {institution}
          </button>
        ))}
      </div>

      <div className="right-section2 flex">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.article
              layout
              initial={{ scale: 0, opacity: 0 }} // Opacity animation
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 0.5,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              key={item.id}
              className="card"
            >
              <div style={{ width: "230px" }} className="box">
                {hoveredId === item.id ? (
                  <TypingEffect
                    text={item.title + " : " + item.description}
                    speed={20} // Fast typing speed
                    eraseSpeed={10}
                    cursor={false}
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                      color: "#212121",
                      padding: "20px",
                      margin: "10px",
                      lineHeight: "1.5rem", // Corrected property
                      textAlign:"start",
                      paddingLeft: "1px",
                    }}
                    cursorShowTime={100}
                    cursorHideTime={200}
                    className="description"
                  />
                ) : (
                  <>
                    <img width={230} src={item.url} alt={item.title} />
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>

                    <div className="flex icons">
                      <div className="logos">
                        <FiLink2 className="icon-share" />
                        <IoLogoGithub className="icon-git" />
                      </div>
                      <a href="#" className="more">
                        <span>
                          more <BsArrowRightShort />
                        </span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default Main;
