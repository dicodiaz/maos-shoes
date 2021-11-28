import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import O11AZULXBLANCO from '../assets/011azulxblanco.jpg';
import O11BLANCOXNEGRO from '../assets/011blancoxnegro.jpg';
import O11BLANCOXVERDE from '../assets/011blancoxverde.jpg';
import O11FRANCIA from '../assets/011francia.jpg';
import O11GRISXNEGRO from '../assets/011grisxnegro.jpg';
import O11GRISXROSADO from '../assets/011grisxrosado.jpg';
import O11NEGROXBLANCO from '../assets/011negroxblanco.jpg';
import ShoppingCart from './ShoppingCart';

const shoes = [
  {
    id: uuidv4(),
    referencia: '011',
    imagen: O11AZULXBLANCO,
    color: 'Azul x Blanco',
    talla: '33 - 42',
    desc: 'Zapatilla en cuero carnaza y lona, suela TR vulcanizada',
  },
  {
    id: uuidv4(),
    referencia: '014',
    imagen: O11BLANCOXNEGRO,
    color: 'Blanco x Negro',
    talla: '33 - 42',
    desc: 'Zapatilla en cuero carnaza y lona, suela TR vulcanizada',
  },
  {
    id: uuidv4(),
    referencia: '014',
    imagen: O11BLANCOXVERDE,
    color: 'Blanco x Verde',
    talla: '33 - 42',
    desc: 'Zapatilla en cuero carnaza y lona, suela TR vulcanizada',
  },
  {
    id: uuidv4(),
    referencia: '011',
    imagen: O11FRANCIA,
    color: 'Francia',
    talla: '33 - 42',
    desc: 'Zapatilla en cuero carnaza y lona, suela TR vulcanizada',
  },
  {
    id: uuidv4(),
    referencia: '011',
    imagen: O11GRISXNEGRO,
    color: 'Gris x Negro',
    talla: '33 - 42',
    desc: 'Zapatilla en cuero carnaza y lona, suela TR vulcanizada',
  },
  {
    id: uuidv4(),
    referencia: '011',
    imagen: O11GRISXROSADO,
    color: 'Gris x Rosado',
    talla: '33 - 42',
    desc: 'Zapatilla en cuero carnaza y lona, suela TR vulcanizada',
  },
  {
    id: uuidv4(),
    referencia: '011',
    imagen: O11NEGROXBLANCO,
    color: 'Negro x Blanco',
    talla: '33 - 42',
    desc: 'Zapatilla en cuero carnaza y lona, suela TR vulcanizada',
  },
];

const Home = () => (
  <main className="bg-light d-flex flex-column justify-content-center">
    <Container fluid className="px-0">
      <Row className="mx-0 gx-0 justify-content-center min-vh-100">
        <Col md={8} className="d-flex flex-column align-items-center py-3">
          <Carousel className="carousel-image">
            {shoes.map((shoe) => {
              const { id, referencia, imagen, color, talla, desc } = shoe;
              return (
                <Carousel.Item key={id}>
                  <div>
                    <Image src={imagen} className="img-fluid mx-auto" thumbnail />
                  </div>
                  <ul className="lead px-5 text-center list-unstyled">
                    <li>
                      <span className="fw-bold">Ref:</span> {referencia}
                    </li>
                    <li>
                      <span className="fw-bold">Colores:</span> {color}
                    </li>
                    <li>
                      <span className="fw-bold">Tallas:</span> {talla}
                    </li>
                    <li>{desc}</li>
                    <li className="pt-4">
                      <Button variant="outline-secondary">Añadir a la tienda</Button>
                    </li>
                  </ul>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
        <Col md={4} className="border-start border-dark">
          <ShoppingCart />
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
