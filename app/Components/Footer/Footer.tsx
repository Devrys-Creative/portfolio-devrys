import Link from "next/link";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return (
        <footer className="page-footer">
            <p><FontAwesomeIcon icon="copyright" /> 2024</p>
            <Link href="/legal-and-privacy"><FontAwesomeIcon icon="shield-halved" /> Mentions légales et politique de confidentialité</Link>
        </footer>
    );
};