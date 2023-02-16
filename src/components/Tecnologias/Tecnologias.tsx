import "./Tecnologias.css"
import { Container, Row, Col, Image } from 'react-bootstrap';

function Tecnologias() {
    return (
        <>
            <Container fluid>
                <Row className="text">
                    <Col>
                        <h1 className="Tecnologias" id="tecnologias">Tecnologias</h1>
                    </Col>
                </Row>
                <Row className="logo-tipo">
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/HTML.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/CSS.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/js.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/react.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/sass.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/nodejs2.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/npm.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/jsexpress.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/typescript.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/mysql.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/webpack.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/vscode.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/git.png" alt="" className="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/img/bootstrap.png" alt="" className="logo" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tecnologias