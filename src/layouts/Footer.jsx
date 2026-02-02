import logoWhite from "/assets/logo-dev--white.png";


function Footer() {

    return (
        
        <footer id="footer" className="footer">
            <div className="footer__container">
                <div className="footer__logo-content">
                    <img src={logoWhite} alt="Diployd - Développeur Web" className="footer__logo" />
                </div>

                <div className="footer__text-content">
                    <p>© {new Date().getFullYear()} Diployd - Développeur Web. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer