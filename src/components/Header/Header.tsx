import './Header.css'
import { Navbar, Nav, Container, Image, Row, Col, Figure } from 'react-bootstrap';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h4>Bruno Sousa, Desenvolvedor Full-Stack</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#projetos">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tecnologias">Tecnologias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sobre">Sobre</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Container fluid>
                <Row className="container-header">
                    <Col xs={12} md={7}>
                        <Figure className='container-figure'>
                            <Figure.Image className="figure" src="../public/img/img2.jpg" alt="..." />
                        </Figure>
                    </Col>
                    <Col xs={12} md={5}>
                        <h1 className='container-contatos'>
                            Bruno Sousa, Desenvolvedor
                            <h5> Full-Stack JavaScript Web</h5>
                            <div className='d-flex'>
                                <a href="https://www.linkedin.com/in/bruno-sousa-741508205/">
                                    <Image className='img-redes mx-3' src="../public/img/linkedin.png" alt="" />
                                </a>
                                <a href="https://github.com/BrunoParaguassu">
                                    <Image className='img-redes mx-3' src="../public/img/pngegg.png" alt="" />
                                </a>
                            </div>
                        </h1>
                        <blockquote className="blockquote">
                            <p>Estudo concluído em desenvolvimento full-stack web javascript pela Digital House,
                                cursando faculdade de Digital Security pela UniNorte, e atuando em projetos freelancers.</p>
                        </blockquote>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header