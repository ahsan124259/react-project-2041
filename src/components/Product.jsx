import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Product = ({product }) => {
    const{title,image,price }=product
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {price }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    );
};

export default Product;