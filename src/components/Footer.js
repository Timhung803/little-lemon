import React from "react";

function Footer() {
  return (
    <footer>
      <img src="./Images/footerLogo.png" alt="" />
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
          <li>Address</li>
          <li>Email</li>
          <li>Phome:</li>
          <li>Opening Hour</li>
          <ul>
            <li>Monday - Friday: 9:00 - 22:00</li>
            <li>Saturday - Sunday: 10:00 - 24:00</li>
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
  );
}

export default Footer;
