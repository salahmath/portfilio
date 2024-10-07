import React, { useState } from "react";
import "./contact.css";
import { FaEnvelope } from "react-icons/fa6";
import emailjs from "emailjs-com"; // Import EmailJS
import toast, { Toaster } from "react-hot-toast"; // Importer react-hot-toast
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/ani/2.json";
function Contact() {
  const [formData, setFormData] = useState({
    email: "", // Champ pour l'email
    message: "", // Champ pour le message
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // État pour gérer l'envoi

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Démarre l'envoi

    // Envoi de l'email via EmailJS
    emailjs
      .sendForm(
        "service_pqkgexk", // Remplacez par votre service ID
        "template_4sweq2a", // Remplacez par votre template ID
        e.target, // Formulaire actuel
        "O0Jbg8BMHL2HTPKEd" // Remplacez par votre User ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message envoyé avec succès !"); // Affiche un toast de succès
        setFormData({ email: "", message: "" }); // Réinitialiser le formulaire
        setIsSubmitting(false); // Réinitialise l'état d'envoi

        // Recharge la page après un délai de 2 secondes
        setTimeout(() => {
          window.location.reload(); // Recharge la page
        }, 2000); // Délai en millisecondes
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Échec de l'envoi. Veuillez réessayer."); // Affiche un toast d'erreur
        setIsSubmitting(false); // Réinitialise l'état d'envoi
      });
  };

  return (
    <section id="Contact" className="contact flex">
    <div>
      <h1 className="flex titles">
        <span>
          <FaEnvelope className="envelope" />
        </span>
        Contact Us
      </h1>
      <p>
        Contact us for more information and get notified when I publish
        something new.
      </p>

      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          {/* Changez le texte du bouton selon l'état d'envoi */}
          <button type="submit" className="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"} {/* Texte dynamique */}
          </button>
        </form>

        {/* Ajout du Toaster pour afficher les notifications */}
        <Toaster />

        </div>

      </div>
      <div className="animation">
         
         <Lottie
           animationData={groovyWalkAnimation}
           loop={true}
           style={{ height: 400,flexGrow:1 }}
         />
       </div>
    </section>
  );
}

export default Contact;
