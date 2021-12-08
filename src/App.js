import React from 'react';
import { Container, Heading } from '@chakra-ui/layout';
import { AddTask } from './components/AddTask';
import { ListTask } from './components/ListTask';
import { Filter } from './components/Filter';

function App() {
  return (
    <Container maxW="container.sm">
      <Heading my="4" ml="260px" textColor="red" >To do list</Heading>
      <AddTask />
      <ListTask />
      <Filter />
    </Container>
  );
}

export default App;