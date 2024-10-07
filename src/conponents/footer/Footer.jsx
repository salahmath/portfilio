import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <footer className='flex'>
        <ul className='flex'>
          <li>
            <a href="#Home">Home</a>
          </li>
           <li>
            <a href="#Projects">Projects</a>
          </li>
         
          <li>
            <a href="#Certification">Certification</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        
        </ul>
        <p>&copy; 2024 - Tous droits réservés</p>

    </footer>
  )
}

export default Footer