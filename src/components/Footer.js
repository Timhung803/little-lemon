import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footerbackground>
      <footer>
        <nav>
          <img src="./Images/footerLogo.png" alt="" />
        </nav>
        <nav>
          <h3>Little Lemon</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h3>Contact</h3>
          <ul>
            <li>Address: 123 ABC Street</li>
            <li>Email: info@littlelemon.com</li>
            <li>Phome: 012 345 6789</li>
            <li id="hour">Opening Hours:</li>
            <ul id="date">
              <li>Mon - Fri: 9:00 - 22:00</li>
              <li>Sat - Sun: 10:00 - 24:00</li>
            </ul>
          </ul>
        </nav>
        <nav>
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Pinterest</li>
            <li>Titter</li>
          </ul>
        </nav>
      </footer>
    </footerbackground>
  );
}

export default Footer;
