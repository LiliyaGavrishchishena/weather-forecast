import React from 'react'
import { useSelector} from 'react-redux'
//reactstrap
import { Card, CardTitle, Row, Col } from 'reactstrap';

const DetailedCity = () => {
  const forecast = useSelector(state => state.forecast)
  console.log(forecast)
  return (
    <>
      <Row className="justify-content-center mb-2">
        <Col md="10  bg-light p-4">
          <Card body className="text-center">
            <CardTitle>City: {forecast.data}</CardTitle>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default DetailedCity
