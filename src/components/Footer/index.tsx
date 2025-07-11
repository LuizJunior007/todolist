import { Container } from "react-bootstrap";

const Footer = () => {

    return(
        <footer className="p-3 mt-5">
            <Container className="d-flex align-items-center justify-content-between">
                <div>
                    © 2025
                </div>

                <div>
                    <a href="https://github.com/LuizJunior007"  className="me-3" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/luiz-junior-503969227/" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </Container>
        </footer>
    );

}

export default Footer;