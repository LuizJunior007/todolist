import { Badge, Container, Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTasks } from "../../context/TaskContext";
import { useEffect } from "react";

const Appbar = () => {

    const { tasks } = useTasks();
    const pendingTasks = tasks.filter((t) => t.status === 'pendente' || t.status === 'atrasada');

    const toggleTheme = () => {

        const html = document.querySelector('html');
        const iconTheme = document.getElementById('icon-theme');

        html?.classList.toggle('dark');

        if(html?.classList.contains('dark')){

            localStorage.setItem('theme', 'dark');
            
            iconTheme?.classList.remove('bi-moon');
            iconTheme?.classList.add('bi-sun');

        } else{

            localStorage.setItem('theme', '');
            
            iconTheme?.classList.remove('bi-sun');
            iconTheme?.classList.add('bi-moon');
        }

    }

    useEffect(() => {   

        const html = document.querySelector('html');
        const iconTheme = document.getElementById('icon-theme');

        html?.classList.add(localStorage.getItem('theme') || 'light');

        if(html?.classList.contains('dark')){

            iconTheme?.classList.remove('bi-moon');
            iconTheme?.classList.add('bi-sun');

        } else{

            iconTheme?.classList.remove('bi-sun');
            iconTheme?.classList.add('bi-moon');
        }

    }, []);

    return(
        <header>
            <Navbar expand="md" className="shadow-sm">
                <Container>
                    <div>
                        <Link to="/" className="navbar-brand d-flex align-items-center">
                            <img src="/vite.svg" alt="logo" />
                            <span className="ms-2">
                                Todolist
                            </span>
                        </Link>
                    </div>
                
                    <NavbarToggle aria-controls="responsive-navbar-nav" />

                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link href="#" onClick={toggleTheme}>
                                <i className="bi bi-moon" id="icon-theme"></i>
                            </Nav.Link>
                            
                            <Link to="/tarefas" className="nav-link position-relative">
                                Tarefas
                                <Badge className="position-absolute top-0 me-5">
                                    {pendingTasks.length !== 0 && pendingTasks.length}
                                </Badge>
                            </Link>
                        
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );

}

export default Appbar;