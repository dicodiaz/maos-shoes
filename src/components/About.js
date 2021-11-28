import { Col, Container, Row } from 'react-bootstrap';

const About = () => (
  <footer className="bg-light d-flex flex-column justify-content-center fixed-bottom border-top border-dark">
    <Container fluid>
      <Row className="mx-0 justify-content-center py-2">
        <Col md={10} className="text-center">
          Somos una empresa colombiana que trabaja con calzado de los más altos estándares de
          calidad.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default About;
