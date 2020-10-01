import React, { Component } from "react";
import logo from "../img/iim.png";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <img
            src={logo}
            alt="iim_logo"
            style={{
              width: "75px",
              margin: "30px auto",
              display: "flex",
              textAlign: "center",
            }}
          />
          <li>
            <a href="#">TABLEAU DE BORD</a>
          </li>
          <p class="sub">Catégories</p>
          <li>
            <a href="#">RELEVÉ DE PRÉSENCE</a>
          </li>
          <li>
            <a class="active" href="#">
              EMPLOI DU TEMPS
            </a>
          </li>
          <li>
            <a href="#">NOTES</a>
          </li>
          <li>
            <a href="#">ABSENCES</a>
          </li>
          <li>
            <a href="#">DEVINCI ONLINE</a>
          </li>
          <li>
            <a href="#">PROMOTION ÉCOLE</a>
          </li>
          <p class="sub">Services</p>
          <li>
            <a href="#">OCCUPATION DES SALLES</a>
          </li>
          <li>
            <a href="#">INTERNATIONAL</a>
          </li>
          <p class="sub">Divers</p>
          <li>
            <a href="#">RESSOURCES</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
