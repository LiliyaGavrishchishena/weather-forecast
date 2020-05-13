import React from 'react';
import { useSelector } from 'react-redux';
import { A } from 'hookrouter';
//reactstrap
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCloudShowersHeavy,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

const formatDate = data => {
  const date = new Date(Date(data));
  let dd = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
  let mm = date.getMonth() > 10 ? date.getMonth() : '0' + date.getMonth();
  return `${dd}.${mm}.${date.getFullYear()}`;
};

const City = () => {
  const weather = useSelector(state => state.weather);
  if (!weather)
    return (
      <Row className="justify-content-center mb-2">
        <Col md="10  bg-light p-4">
          <Card body className="text-center">
            <CardTitle>You could search some weather</CardTitle>
          </Card>
        </Col>
      </Row>
    );

  return (
    <Row className="justify-content-center mb-2">
      <Col md="10  bg-light p-4">
        <Card body className="text-center">
          <CardTitle>City: {weather.name}</CardTitle>
          <CardText>{formatDate(weather.dt)}</CardText>
          <CardText>Weather - {weather.weather[0].main}</CardText>
          <CardText>
            {weather.weather[0].main === 'Clouds' ? (
              <FontAwesomeIcon icon={faCloud} />
            ) : weather.weather[0].main === 'Rain' ? (
              <FontAwesomeIcon icon={faCloudShowersHeavy} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </CardText>

          <A href={`/detailed?city=${weather.name}`}>
            <Button color="danger">Details</Button>
          </A>
        </Card>
      </Col>
    </Row>
  );
};

export default City;
