import React from 'react';
import { Heading, Flex } from '@chakra-ui/core';

const Navbar = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="orange.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Polyglot Library
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
