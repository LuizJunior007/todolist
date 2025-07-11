import type { ReactNode } from "react";
import { Col, Container, Row, Toast } from "react-bootstrap";
import Appbar from "../Appbar";
import Footer from "../Footer";
import { useToast } from "../../context/ToastContext";

type LayoutProps = {

    children: ReactNode

}

const Layout = ({ children } : LayoutProps) => {

    const { toast, closeToast } = useToast();

    return(

        <div className="main">

            <div>
                <Appbar />

                <Container>
                    <Row className="mt-5">
                        <Col>
                            { children }
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />

            <Toast className={`position-fixed top-0 m-3 p-3 fw-medium text-light text-center ${toast.status === 'success' ? 'bg-success' : 'bg-danger'}`} onClose={() => closeToast()} show={ toast.show } delay={3000} autohide>
                { toast.msg }
            </Toast>            
        </div>

    );

}

export default Layout;