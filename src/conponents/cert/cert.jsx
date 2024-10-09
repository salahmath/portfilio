import React, { useState } from "react";
import "./cert.css";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/ani/7.json";
import TypingEffect from "react-typing-effect"; // Importer la bibliothèque

function Cert() {
  const [filter, setFilter] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const certifications = [
    {
      id: 1,
      title: "PHP with MySQL",
      institution: "Udemy",
      date: "22/09/2024",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-a94ffa87-7eea-4aa9-a542-8f671c79c624.jpg?v=1727027520000",
      description:
        "A comprehensive certification in PHP and MySQL development, covering both fundamental and advanced concepts.",
    },
    {
      id: 2,
      title: "MERN Stack",
      institution: "Udemy",
      date: "62/09/2023",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-7f86c6ef-5d3b-468d-8fcf-6709dca5b919.jpg?v=1701026703000",
      description:
        "An in-depth certification focused on the full MERN (MongoDB, Express, React, Node.js) stack development.",
    },
    {
      id: 3,
      title: "Web Design",
      institution: "FreeCodeCamp",
      date: "08/10/2023",
      url: "/Capture d’écran 2024-10-07 192307.png",
      description:
        "A certification that focuses on modern web design techniques, including responsive and accessible design.",
    },
    {
      id: 4,
      title: "React Native",
      institution: "Udemy",
      date: "23/09/2024",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-2573a37c-70e0-4dff-b346-21d9e7075916.jpg?v=1727093940000",
      description:
        "A complete guide to building mobile applications using React Native, covering both iOS and Android platforms.",
    },
    {
      id: 5,
      title: "React && JavaScript",
      institution: "Udemy",
      date: "08/10/2023",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-b273f3b8-f6fa-40c3-a54d-1e8a5541953c.jpg?v=1698769848000",
      description:
        "A certification focused on mastering JavaScript, from basic concepts to advanced techniques for web development.",
    },
    {
      id: 6,
      title: "Compétence en gestion d'un centre de vote",
      institution: "ISIE",
      date: "01/10/2024",
      url: "/Capture d’écran 2024-10-07 194456.png",
      description:
      "Certification issued by the Independent Higher Authority for Elections (ISIE), demonstrating skills in managing a polling center during elections."
        },
  ];

  const institutions = [
    ...new Set(certifications.map((cert) => cert.institution)),
  ];

  const filteredCertifications = certifications.filter(
    (cert) => filter === "" || cert.institution === filter
  );

  return (
    <main id="Certification" className="flex cert">
      <div className="left-section3 flex">
        <h1 className="typing" style={{ textAlign: "center" }}>
          My Certification
        </h1>
        <Lottie
          animationData={groovyWalkAnimation}
          loop={true}
          style={{ height: 200, flexGrow: 1 }}
        />
        <button
          onClick={() => setFilter("")}
          className={filter === "" ? "btn1" : ""}
        >
          All
        </button>
        {institutions.map((institution) => (
          <button
            key={institution}
            onClick={() => setFilter(institution)}
            className={filter === institution ? "btn1" : ""}
          >
            {institution}
          </button>
        ))}
      </div>

      <div className="right-section3 flex">
        <AnimatePresence>
          {filteredCertifications.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 0.5,
              }}
              className="card"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img width={230} src={item.url} alt={item.title} />
                <div style={{ width: "230px" }} className="box">
                  {hoveredId === item.id ? (
                    <TypingEffect
                      text={item.description}
                      speed={20} // Fast typing speed
                      eraseSpeed={10}
                      cursor={false}
                      cursorShowTime={100}
                      cursorHideTime={200}
                      className="description"
                    />
                  ) : (
                    <>
                      <h1>{item.title}</h1>
                      <p>{item.date}</p>
                    </>
                  )}
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default Cert;
