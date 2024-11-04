
import myPhoto from "./Assets/images/head.webp";

import Image from "next/image";
import { AppBar } from "./Components/AppBar/AppBar";
import "./page-home.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main>
      <section className="hero-header">
        <h1 className="hero-header__title">Devrys<span> Creative</span></h1>
        <Image
          className="hero-header__photo"
          src={myPhoto}
          alt="photo de sylvain maitrehenry"
          width={300}
          height={300}
          priority
        />
        <h2 className="hero-header__name">Sylvain Maitrehenry</h2>
        <h3 className="hero-header__job">&lt;Developpeur fullstack&gt;</h3>
        <div className="hero-header__tech-list">
          <FontAwesomeIcon icon={["fab", "html5"]} />
          <FontAwesomeIcon icon={["fab", "js"]} />
          <FontAwesomeIcon icon={["fab", "react"]} />
          <FontAwesomeIcon icon={["fab", "vuejs"]} />
          <FontAwesomeIcon icon={["fab", "php"]} />
          {/* < li>Redux / next/ nuxt / angular / symfony </li> */}
        </div>
        <div className="hero-header__scroll-indicator"><FontAwesomeIcon icon="caret-down" /></div>
      </section>
      <AppBar />
      <section className="long-space">test</section>
      {/* <Biography />
      <Skills />
      <Projects />
      <Contact /> */}
    </main>
  );
}
