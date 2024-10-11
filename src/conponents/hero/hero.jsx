import React, { useState } from "react";
import "./hero.css";
import ReactTypingEffect from "react-typing-effect";

import { MdVerified } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/ani/5.json";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { FaDownload } from "react-icons/fa";

function Hero() {
  const [loadings, setLoadings] = useState([]); // Manage loading states for multiple buttons

  // Function to trigger loading state and download
  const enterLoading = (index) => {
    // Set the loading state for the button
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    // After 1000 ms, stop loading and trigger the resume download
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });

      // Trigger the download programmatically
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Path to your resume file
      link.download = "resume.pdf"; // Name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000); // 1 second delay
  };

  return (
    <section id="Home" className="hero">
      <div className="left-section ">
        <div className="image navbar">
          <img src="/salah.png" alt="hero" />
          <div>
            <span className="resu">
              {" "}
              <MdVerified className="MdVerified" />
              <Flex gap="small" className="flexi" vertical>
                <Flex gap="small" wrap>
                  <Button
                    type="primary"
                    loading={loadings[0]}
                    onClick={() => enterLoading(0)}
                  >
                    Resume <FaDownload className="res" />
                  </Button>
                </Flex>
              </Flex>
            </span>
          </div>
        </div>
        <div className="title">
          <ReactTypingEffect
            text={["Full Stack developer", "Web developer", "Mobile developer"]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={1000}
          />{" "}
        </div>
        <div className="desc">
          <p>
            Salah Mathlouthi, a junior web and mobile developer passionate about
            creating dynamic applications. Always eager to learn, I work with
            modern technologies to deliver efficient and intuitive solutions.
          </p>
        </div>
        <div className="link">
          <a
            href="https://www.facebook.com/mathl.mkachakh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="fcb" />
          </a>
          <a
            href="https://www.instagram.com/salah_mathlouthi0/profilecard/?igsh=MTF3aTFnMnVudHc4NQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="insta" />
          </a>
          <a
            href="https://github.com/salahmath"
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
