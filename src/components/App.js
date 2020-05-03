import React from 'react';
//reactstrap
import { Container } from 'reactstrap';
//components
import Nav from './Nav'
import Search from './Search'
import City from './City'
import History from './History'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Nav/>
      <Container fluid className="full-height">
        <Search/>
        <City/>
        <History/>
      </Container>
      <Footer/>
    </>
  )
}

export default App