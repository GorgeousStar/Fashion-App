import React from 'react';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vector from '../../Images/vector.png';
import Button from 'react-bootstrap/Button';
import Amazon from '../../Images/amazon.png';
import Hm from '../../Images/hm.png';
import Lacoste from '../../Images/lacoste.png';
import Levi from '../../Images/levi.png';
import Obey from '../../Images/obey.png';
import Shopify from '../../Images/shopify.png';

function Hero() {
  return (
    <div>
      <Container>
      <Row className="rows">
        <Col>
          <h1 className="let">
          <span className="box1">LET’S</span><br/>
          EXPLORE<br/>
          <span className="box2">UNIQUE</span><br/>
          CLOTHES.
          </h1>
          <p className="live">
          Live for Influential and Innovative fashion!
          </p>
          <div className="shop">
            <img src={Vector} className="vect"/>
            <Button className="but" variant="dark">Shop Now</Button>
          </div>
        </Col>
        <Col className="img2">

        </Col>
      </Row>
      <div className="brand">
        <div className="log">
        <img className="logos" src={Hm}/>
        </div>
        <div className="log">
        <img className="logos" src={Obey}/>
        </div>
        <div className="log">
        <img className="logos" src={Shopify}/>
        </div>
        <div className="log">
        <img className="logos" src={Lacoste}/>
        </div>
        <div className="log">
        <img className="logos" src={Levi}/>
        </div>
        <div className="log">
        <img className="logos" src={Amazon}/>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default Hero