import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="header">
      <nav>
        <div className="logo">
          <img src="src/assets/logo.png" alt="Logo" />
          <h2>AnjaliArt</h2>
        </div>
        <ul>
          <li><NavLink href="#home" onClick={(e) => {
               e.preventDefault();
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}>Home</NavLink>
          </li>

          <li><NavLink href="#gallery" onClick={(e) => {
               e.preventDefault();
                  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
                }}>Gallery</NavLink>
          </li>

                <li><NavLink href="#about" onClick={(e) => {
               e.preventDefault();
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}>About</NavLink>
          </li>

          <li><NavLink href="#order" onClick={(e) => {
               e.preventDefault();
                  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
                }}>Order Us</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
