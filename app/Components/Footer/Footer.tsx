import Link from "next/link";
import Image from "next/image";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { svgRepoImages } from "@/app/Assets/icons/svgRepo";

export const Footer = () => {
    return (
        <footer className="page-footer">
            <p><FontAwesomeIcon icon="copyright" /> 2024</p>
            <Link href="/legal-and-privacy"><FontAwesomeIcon icon="shield-halved" /> Mentions légales et politique de confidentialité</Link>
            <div className="page-footer__socials">
                <Link href="https://github.com/RyssaNavlys" target="_blank" aria-label="Aller sur mon profil github">
                    <Image
                        src={svgRepoImages[`logoGitHub`]}
                        alt={`logo de GitHub`}
                        height={50}
                        width={50}
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/sylvain-maitrehenry/" target="_blank" aria-label="Aller sur mon profil LinkedIn">
                    <Image
                        src={svgRepoImages[`logoLinkedIn`]}
                        alt={`logo de LinkedIn`}
                        height={50}
                        width={50}
                    />
                </Link>
            </div>
        </footer>
    );
};