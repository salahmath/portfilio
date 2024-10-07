import React, { useState } from "react";
import "./cert.css";
import { IoLogoGithub } from "react-icons/io5";
import { FiLink2 } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/ani/7.json";

function Cert() {
  const [filter, setFilter] = useState("");

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
        "Certification délivrée par l'Instance Supérieure Indépendante pour les Élections (ISIE), démontrant des compétences en gestion d'un centre de vote lors des élections.",
    },
  ];

  const institutions = [
    ...new Set(certifications.map((cert) => cert.institution)),
  ]; // Récupère les institutions uniques

  const filteredCertifications = certifications.filter(
    (cert) => filter === "" || cert.institution === filter
  );

  return (
    <main id="Certification" className="flex cert">
      <div className="left-section3 flex">
        <div className="animation2 flex">
          <h1 style={{ textAlign: "center" }}>My Certification</h1>
          <Lottie
            animationData={groovyWalkAnimation}
            loop={true}
            style={{ height: 200, flexGrow: 1 }}
          />
        </div>
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
              layout
              initial={{ scale: 0, opacity: 0 }} // Ajouter une animation d'opacité
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 0.5,
              }}
              key={item.id}
              className="card"
            >
              <img width={230} src={item.url} alt={item.url} />
              <div style={{ width: "230px" }} className="box">
                <h1>{item.title}</h1>
                <p>{item.date}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default Cert;
