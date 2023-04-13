import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <article>
        <section className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicage</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a table</button>
        </section>
        <section>
          <img src="./Images/restauranfood.jpg" alt="" />
        </section>
      </article>
    </header>
  );
}

export default Header;
