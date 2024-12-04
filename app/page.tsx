// next & react importation
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// custom importation
import { AppBar } from "./Components/AppBar/AppBar";
import { ProjectsList } from "./Components/ProjectsList/ProjectsList";
import { ContactForm } from "./Components/ContactForm/ContactForm";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// style
import "./page-home.scss";
import {svgRepoImages} from "./Assets/icons/svgRepo";
const {logoAngular,logoC,logoCSS,logoCpp,logoDocker,logoGit,logoGitHub,logoGitLab,logoHTML,logoJS,logoNext,logoNuxt,logoOC,logoPHP,logoPython,logoReact,logoRedux,logoSf,logoTS,logoVet,logoVue} = svgRepoImages;

// metadata management
export const metadata: Metadata = {
  title: "Devrys - portfolio",
  description: "Portfolio de développeur·euse",
};

// Home page component
const Home = () => {

  const logoSizeInText = 50;

  return (
    <main>
      <section className="hero-header">
        <h1 className="hero-header__title">Devrys<span> Creative</span></h1>
        <Image
          className="hero-header__photo"
          src="/banner/head.png"
          alt="dessin de sylvain maitrehenry entouré d'animaux, réalisé par son cousin Alexis"
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
        <div className="hero-header__scroll-indicator"><Link href="/#about"><FontAwesomeIcon icon="caret-down" /></Link></div>
      </section>

      <AppBar menuMarker={true} />

      <section className="main-section main-section--scroll-margin about" id="about">
        <h2 className="main-section__title about__title"><FontAwesomeIcon icon="id-card-clip" /> À propos de moi</h2>

        <article className="about__article">
          <h3 className="about__article__title">Autodidacte passionné</h3>
          <p className="about__article__text">Développeur web <strong>autodidacte passionné depuis les années 2000</strong>, j’ai découvert principalement HTML, CSS et PHP, notamment grâce au Site du Zéro. J’ai aussi appris des rudiments de C, C++, Python et JavaScript. Attiré par <strong>la créativité et le partage d’informations</strong>, j’ai réalisé des sites personnels, associatifs et plus tard des applications professionnelles adaptées aux besoins de mon équipe en tant que directeur de clinique.</p>
          <div className="about__article__logo">
            <Image
              src={logoHTML}
              alt="logo de HTML 5"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoCSS}
              alt="logo de CSS 3"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoPHP}
              alt="logo de PHP"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoPython}
              alt="logo de Python"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoC}
              alt="logo de C"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoCpp}
              alt="logo de C++"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoJS}
              alt="logo de JavaScript"
              height={logoSizeInText}
              width={logoSizeInText}
            />
          </div>
        </article>

        <article className="about__article">
          <h3 className="about__article__title">Docteur vétérinaire</h3>
          <p className="about__article__text">En effet, j’ai suivi une autre voie par volonté de prendre soin des animaux, et obtenu mon doctorat en médecine vétérinaire en 2014. Pendant 10 ans de pratique vétérinaire, j’ai développé des compétences pour <strong>gérer le stress, prioriser les tâches, travailler en équipe et soigner la relation clientèle</strong> (communication, gestion de conflits, accompagnement dans les décisions etc.). J’ai aussi été habitué à <strong>réaliser une veille informationnelle</strong> efficace. Enfin, cette carrière a aussi nourri mon esprit entrepreneurial. Cependant, face aux évolutions du secteur, j’ai pris la décision de revenir à ma première passion.</p>
          <div className="about__article__logo">
            <Image
              src={logoVet}
              alt="logo d'ordre nationale des vétérinaires"
              height={logoSizeInText}
              width={logoSizeInText}
            />
          </div>
        </article>

        <article className="about__article">
          <h3 className="about__article__title">Formation en développement web</h3>
          <p className="about__article__text">En 2024, j’ai complété une <strong>formation intensive de 9 mois</strong> chez <a href="" target="_blank">OpenClassrooms <FontAwesomeIcon icon="arrow-up-right-from-square" /></a> en développement web, consolidant mes connaissances de base et acquérant de nouvelles compétences comme React, TypeScript, Redux, Next.js, Vue.js et Nuxt. Cette formation m’a permis d’<strong>adopter les conventions et la rigueur professionnelles</strong> essentielles au métier, et me motive aujourd’hui à élargir encore mes horizons (Angular et Symfony notamment, dans un premier temps).</p>
          <div className="about__article__logo">
            <Image
              src={logoOC}
              alt="logo de typescript"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoReact}
              alt="logo de React"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoTS}
              alt="logo de typescript"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoRedux}
              alt="logo de Redux"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoNext}
              alt="logo de Next.js"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoVue}
              alt="logo de Vue.js"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoNuxt}
              alt="logo de Nuxt"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoAngular}
              alt="logo de Angular"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoSf}
              alt="logo de Symfony"
              height={logoSizeInText}
              width={logoSizeInText}
            />
          </div>
        </article>
        
        <article className="about__article">
          <h3 className="about__article__title">Activité recherchée</h3>
          <p className="about__article__text">Depuis un an maintenant, je suis <strong>bénévole et co-gestionnaire du pôle informatique</strong> du <a href="https://projet-meduses.com/" target="_blank">Projet&nbsp;Méduses <FontAwesomeIcon icon="arrow-up-right-from-square" /></a>, où je crée des sites et applications modernes avec une attention particulière pour <strong>l’accessibilité et le référencement</strong>, qui sont des piliers du militantisme sur internet. Au sein de cette association j&apos;utilise régulièrement Git et les conteneurs Docker, et j’exerce chaque jour mes compétences en <strong>développement web au sein d’une équipe</strong>.</p>
          <div className="about__article__logo">
            <Image
              src={logoGit}
              alt="logo de Git"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoGitHub}
              alt="logo de Github"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoGitLab}
              alt="logo de Gitlab"
              height={logoSizeInText}
              width={logoSizeInText}
            />
            <Image
              src={logoDocker}
              alt="logo de Docker"
              height={logoSizeInText}
              width={logoSizeInText}
            />
          </div>
          <p className="about__article__text">Je recherche une opportunité professionnelle me permettant de concilier travail et vie familiale. Je suis particulièrement efficace en télétravail et dispose de tout l’équipement pour un contact fluide avec l’équipe et les client·es. D’un naturel curieux, je me ferai un plaisir de vous assister dans la concrétisation de vos projets.</p>
        </article>
        <article className="about__article about__article--centered">
          <p className="about__article__text about__article__text--center"><Link href="/#contact" className="cta-button cta-button--big"><FontAwesomeIcon icon="envelope" /> Contactez moi</Link></p>
        </article>
        
      </section>

      <section className="main-section main-section--scroll-margin projects" id='projects'>
        <h2 className="main-section__title projects__title"><FontAwesomeIcon icon="code" /> Quelques uns de mes projets</h2>
        <div className="projects__projects-list">
          <ProjectsList />
        </div>
      </section>
      <section className="main-section main-section--scroll-margin contact" id="contact">
        <h2 className="main-section__title contact__title"><FontAwesomeIcon icon="comment-dots" /> Une mission ou un poste à me proposer ?</h2>
        <ContactForm />
      </section>
    </main>
  );
}

export default Home;