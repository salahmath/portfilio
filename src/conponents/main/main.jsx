import React, { useState } from "react";
import "./main.css";
import { IoLogoGithub } from "react-icons/io5";
import { FiLink2 } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import groovyWalkAnimation from "../../../public/ani/6.json";
import Lottie from "lottie-react";
import TypingEffect from "react-typing-effect"; // Importer la bibliothèque
import { message } from "antd";

function Main() {
  const [colone, setColone] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const [copiedId, setCopiedId] = useState(null); // État pour stocker l'ID copié

  const myprojects = [
    {
      id: 4,
      title: "E-Commerce Admin Panel",
      category: ["React", "Bootstrap", "CSS"],
      url: "/abcde.png",
      git: "https://github.com/salahmath/admin-frontend.git",

      description:
        "Development of an admin panel for an e-commerce platform. This interface, built with React and Bootstrap, allows managing products, orders, and users. It is optimized for a seamless user experience and efficient sales management.",
    },
    {
      id: 5,
      title: "E-Commerce Client App",
      category: ["React", "Bootstrap", "CSS"],
      url: "/abcd.png",
      git: "https://github.com/salahmath/client-frontend.git",
      description:
        "Development of a client-side application for an e-commerce platform. The app allows users to browse, search, and purchase products online, offering a responsive and user-friendly shopping experience powered by React and Bootstrap.",
    },
    {
      id: 6,
      title: "E-Commerce Backend API",
      category: ["Node", "MongoDB", "Express"],
      url: "https://miro.medium.com/v2/resize:fit:600/0*_PPcWzOsiq8Imzff.jpg",
      git: "https://github.com/salahmath/pfe-Backend.git",
      description:
        "Development of the backend for an e-commerce platform, using Node.js, Express, and MongoDB. This backend handles transactions, users, and products, ensuring security and efficiency in sales operations.",
    },
    {
      id: 7,
      title: "Mobile Application for Online Job Search",
      category: ["React Native"],
      url: "https://www.hawkdivemedia.com/wp-content/uploads/2022/09/Home.jpg",
      git: "https://github.com/salahmath/AgriAdvisorPro.git",
      description:
        "A mobile application that allows candidates to search for job opportunities online and apply directly. The interface is intuitive and optimized for easy navigation and job searching.",
    },
    {
      id: 1,
      title: "Pixi-media",
      category: ["React", "Bootstrap"],
      url: "/ixe.png",
      git: "https://github.com/salahmath/pixi-salah.git",
      description:
        "This React web application offers a user-friendly interface allowing users to search, display, and manage images and videos using dedicated APIs. It leverages the powerful features of React to ensure a smooth and dynamic user experience.",
    },
    {
      id: 2,
      title: "Message application",
      category: ["React", "Bootstrap", "Node", "MongoDB", "Express", "CSS"],
      url: "https://themewagon.com/wp-content/uploads/2021/06/3.gif",
      git: "https://github.com/salahmath/Initiale_MERN.git",

      description:
        "Development of a complete web application using the MERN stack (MongoDB, Express.js, React, Node.js) with a secure authentication system based on JSON Web Tokens (JWT). This project enabled the creation of a modern web application with robust authentication management.",
    },
    {
      id: 3,
      title: "CRUD with Laravel",
      category: ["Laravel", "CSS", "PHP", "MySQL"],
      url: "https://images.ctfassets.net/23aumh6u8s0i/5c2LVJHpVFgNW12LvVSnCg/a789ce83982ed4e63baff797495fc342/laravel-6-crud-app",
      git: "https://github.com/salahmath/laravel_crud.git",

      description:
        "Design and development of a CRUD management system for a blog application using Laravel. This project implemented a full-featured blog post management interface.",
    },
    {
      id: 8,
      title: "BusTun",
      category: ["React", "Bootstrap", "CSS"],
      url: "/bus.png",
      git: "https://github.com/Karimselmi/BusTimeTun.git",

      description:
        "Dynamic website for checking bus schedules and purchasing tickets online.",
    },
    {
      id: 9,
      title: "Guapofood",
      category: ["HTML", "PHP", "CSS"],
      url: "/guoappo.png",
      git: "https://github.com/salahmath/GuapoFood-.git",

      description:
        "Dynamic website for browsing food prices and easily purchasing meals online.",
    },
  ];
  const copyToClipboard = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copiée dans le presse-papiers!"); // Notification (optionnelle)
      })
      .catch((err) => {
        console.error("Échec de la copie : ", err);
      });
  };
  const filtered = myprojects.filter(
    (item) => colone === "" || item.category.some((cat) => cat === colone)
  );

  // Get unique categories (institutions)
  const institutions = [
    ...new Set(myprojects.flatMap((project) => project.category)),
  ];

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    message.success("URL copiée dans le presse-papiers!");
  };

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
                  <>
                    <img width={230} src={item.url} alt={item.title} />
                    <div style={{
                      padding: "5px",
                    }}></div>
                    <div className="flex icons">
                      <div className="logos">
                        <FiLink2
                          onClick={() => handleCopyId(item.git)}
                          className="icon-share"
                        />
                        <a href={item.git} className="more">
                          <IoLogoGithub className="icon-git" />
                        </a>
                      </div>
                    </div>

                    <TypingEffect
                      text={item.title + " : " + item.description}
                      speed={20} // Fast typing speed
                      eraseSpeed={10}
                      cursor={false}
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "12px",
                        color: "gray",
                        padding: "20px",
                        margin: "10px",
                        lineHeight: "1.5rem", // Corrected property
                        textAlign: "start",
                        paddingLeft: "1px",
                        paddingRight: "10px",
                      }}
                      cursorShowTime={100}
                      cursorHideTime={200}
                      className="description1"
                    />
                  </>
                ) : (
                  <>
                    <img width={230} src={item.url} alt={item.title} />
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>

                    <div className="flex icons">
                      <div className="logos">
                        <FiLink2 className="icon-share" />
                        <a href={item.git} className="more">
                          <IoLogoGithub className="icon-git" />
                        </a>
                      </div>
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
