import React from 'react';
//reactstrap
import { Container } from 'reactstrap';
//components
import Search from './Search'
import City from './City'
import History from './History'

const Main = () => {
  return (
    <>
      <Container fluid className="full-height">
        <Search/>
        <City/>
        <History/>
      </Container>
    </>
  )
}

export default Main