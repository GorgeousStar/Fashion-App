import React from 'react';
import './Arrival.css';
import Index from '../../Images/vector.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Arrive1 from '../../Images/arrival1.png';
import Arrive2 from '../../Images/arrival2.png';
import Arrive3 from '../../Images/arrival3.png';

function Arrival() {
  return (
    <div className="arrive">
      <div className="main-new">
      <h2 className="new">NEW ARRIVALS</h2>
      <img className="index" src={Index}/>
      </div>
      <div>
      <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Arrive1} />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Arrive2} />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Arrive3} />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
      </div>
    </div>
  )
}

export default Arrival