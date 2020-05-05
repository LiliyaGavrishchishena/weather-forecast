import React, { useState, useEffect } from 'react';
import api from '../api';
// import { useSelector} from 'react-redux'
//reactstrap
import { Card, CardTitle, Row, Col, CardGroup } from 'reactstrap';

const DetailedCity = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await api.fetchForecast('Kiev');
      setForecast(response);
    }
    fetchData();
  }, []);

  console.log(forecast);

  if (!forecast) return <p>Нет данных</p>;

  return (
    <>
      <Row className="justify-content-center mb-2">
        <Col md="10  bg-light p-4">
          <Card body className="text-center">
            <CardTitle>City:{forecast.city.name}</CardTitle>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DetailedCity;
