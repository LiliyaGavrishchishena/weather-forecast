import React from 'react';
import { A } from 'hookrouter';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//reactstrap
import { CardGroup, Card, CardTitle, Row, Col, Button } from 'reactstrap';

const History = () => {
  const historyOfSearch = useSelector(state => state.historyOfSearch);
  return (
    <Row className="justify-content-center mb-2">
      <Col md="12 bg-light p-4">
        <CardGroup>
          {historyOfSearch.map(item => (
            <Card body className="text-center" key={item.name}>
              <CardTitle>{item.name}</CardTitle>
              <Button>
                <A href="/history">More</A>
              </Button>
            </Card>
          ))}
        </CardGroup>
      </Col>
    </Row>
  );
};

export default History;
