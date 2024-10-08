import React from "react";
import "./hero.css";
import ReactTypingEffect from 'react-typing-effect';

import { MdVerified } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/ani/5.json";

function Hero() {
  return (
    <section id="Home" className="hero">
      <div className="left-section  ">
        <div className="image navbar">
          <img src="/salah.png" alt="hero" />
          <span>
            {" "}
            <MdVerified className="MdVerified" />
          </span>
        </div>
        <div className="title">
        <ReactTypingEffect
        text={["Full Stack developer","Web developer", "Mobile developer"]}
        speed={100}
        eraseSpeed={50}
        typingDelay={500}
        eraseDelay={1000}
      />        </div>
        <div className="desc">
          <p>
            Salah Mathlouthi, a junior web and mobile developer passionate about
            creating dynamic applications. Always eager to learn, I work with
            modern technologies to deliver efficient and intuitive solutions.
          </p>
        </div>
        <div className="link">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="fcb" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="insta" />
          </a>
          <a
            href="https://github.com/ton-profil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/salah-mathlouthi-583593288"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="link" />
          </a>
        </div>
      </div>
      <div className="right-section flex">
        <div className="lottie">
          <Lottie animationData={groovyWalkAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
