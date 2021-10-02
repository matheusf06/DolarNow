import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="logo">Dolar Now</h1>
      </Link>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  );
}
