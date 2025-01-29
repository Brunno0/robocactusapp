import React from 'react';
import { Flex, Box, Highlight, Text } from '@chakra-ui/react';

const HighlightText = ({ letter, text }) => {
  return (
    <Flex alignItems="flex-start" position="relative" marginBottom={"10px"}>
      <Box>
        <Highlight query={letter} styles={{ 
            px: '1',
            py: '1', 
            bg: '#0162b6', 
            fontSize: "3em", 
            margin: "5px",
            color: "white" }}>
          {letter}
        </Highlight>
      </Box>
      <Box ml="10px">
        <Text fontSize="lg" textAlign="justify">{text}</Text>
      </Box>
    </Flex>
  );
}

export default HighlightText;
