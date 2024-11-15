// import react / next components
import Link from "next/link";

// import custom components
import { AppBar } from "../Components/AppBar/AppBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// style
import "./page-legal-and-privacy.scss";
import { Metadata } from "next";


// metadata management
export const metadata: Metadata = {
    title: "Devrys - Mentions légales",
    description: "Mentions légales et politique de confidentialité du portfolio de Devrys-Creative",
};


const legalAndPrivacyPage = () => {

    return (
        <>
            <AppBar />
            <main className="legal-and-privacy-page">
                <h1 className="legal-and-privacy-page__title"><FontAwesomeIcon icon="shield-halved" /> Mentions Légales et Politique de Confidentialité</h1>
                <section className="legal-and-privacy-page__section">
                    <h2 className="legal-and-privacy-page__section__title"><FontAwesomeIcon icon="scale-balanced" /> Informations légales</h2>
                    <h3 className="legal-and-privacy-page__section__subtitle"><FontAwesomeIcon icon="pen" /> Éditeur du site</h3>
                    <p>Nom du responsable : Sylvain Maitrehenry</p>
                    <p>Adresse : contactez-moi via <Link href="/#contact">le formulaire</Link>.</p>
                    <p>Téléphone : contactez-moi via <Link href="/#contact">le formulaire</Link>.</p>
                    <p>E-mail : contactez-moi via <Link href="/#contact">le formulaire</Link>.</p>
                    <h3 className="legal-and-privacy-page__section__subtitle"><FontAwesomeIcon icon="server" /> Hébergement</h3>
                    <p>Hébergeur : </p>
                    <p>Adresse : </p>
                    <p>Téléphone : </p>
                </section>
                <section className="legal-and-privacy-page__section">
                    <h2 className="legal-and-privacy-page__section__title"><FontAwesomeIcon icon="database" /> Collecte et traitement des données personnelles</h2>
                    <p>Conformément au Règlement Général sur la Protection des Données (RGPD), nous collectons et traitons vos données personnelles dans le respect des règles suivantes.</p>
                    <p>Données collectées : je collecte les données renseignées dans le formulaire : nom, prénom, e-mail, numéro de téléphone.</p>
                    <p>Finalités : vos données sont utilisées uniquement dans le cadre de la correspondance : envoi d&apos;un e-mail à moi-même et enregistrement dans une base de données pour sauvegarde. Aucune donnée n&pos;est partagée.</p>
                    <p>Base légale : consentement explicite.</p>
                    <p>Durée de conservation : aussi longtemps que nécessaire pour les finalités indiquées.</p>
                    <p>Droit des utilisateurs : accéder, rectifier ou supprimer vos données, retirer votre consentement à tout moment, porter une réclamation auprès de <Link href="https://www.cnil.fr">la CNIL</Link>.</p>
                    <p>Pour exercer vos droits, contactez-moi via <Link href="/#contact">le formulaire</Link>.</p>
                </section>
                <section className="legal-and-privacy-page__section">
                    <h2 className="legal-and-privacy-page__section__title"><FontAwesomeIcon icon="cookie" /> Utiliation des cookies</h2>
                    <p>Aucun cookie n&apos;est utilisé sur ce site.</p>
                </section>
                <section className="legal-and-privacy-page__section">
                    <h2 className="legal-and-privacy-page__section__title"><FontAwesomeIcon icon="copyright" /> Propriété intellectuelle</h2>
                    <p>Tous les contenus présents sur ce site (textes, images, logos, etc.) sont protégés par le droit d’auteur. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable est interdite.</p>
                </section>
                <section className="legal-and-privacy-page__section">
                    <h2 className="legal-and-privacy-page__section__title"><FontAwesomeIcon icon="user-shield" /> Limitation de responsabilité</h2>
                    <p>Nous nous efforçons de fournir des informations exactes et mises à jour, mais nous ne saurions être tenus responsables des erreurs ou omissions. L’utilisation du site est sous votre seule responsabilité.</p>
                </section>
            </main>
        </>
    );
};

export default legalAndPrivacyPage;