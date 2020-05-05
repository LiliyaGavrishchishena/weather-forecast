import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { operations } from '../store/redux';
//reactstrap
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Search = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(operations.fetchWeather(city));

    setCity('');
  };

  return (
    <Row className="justify-content-center mb-2">
      <Col md="10  bg-light p-4">
        <Form
          className="form-inline justify-content-center"
          onSubmit={handleSubmit}
        >
          <FormGroup className="form-inline justify-content-center">
            <Label for="weather" className="small text-muted pr-2">
              Weather in...
            </Label>
            <Input
              className="form-control pl-5 pr-5 mr-4 mb-2"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Button className="btn btn-primary pl-5 pr-5 mb-2">Search</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
