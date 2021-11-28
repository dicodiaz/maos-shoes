import { Button, Container, Stack } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCart = () => (
  <Container className="py-3 min-vh-100 d-flex flex-column">
    <Stack gap={3} className="flex-grow-1">
      <div className="d-flex justify-content-center">
        <FaShoppingCart className="fs-1" />
      </div>
    </Stack>
    <Button variant="secondary" className="mx-2">
      Hacer pedido
    </Button>
  </Container>
);

export default ShoppingCart;
