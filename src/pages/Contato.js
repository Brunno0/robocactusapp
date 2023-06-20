import React from 'react';
import styled from 'styled-components';
import { useBreakpointValue } from '@chakra-ui/react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { Highlight } from '@chakra-ui/react';
import robocactus from '../assests/robocactus.png';
import project from '../assests/project.png';
import robs2 from '../assests/robocactus2.png';



const Contato = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Header />

      
      <Box
                width="100vw"
                paddingTop="10px"
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
            >
        <Container gap={10} maxW={isMobile ? '100%' : '70%'} >
          <Box w="100%" textAlign="justify" maxW="100%">
            <Heading lineHeight={['tall', 'tall', 'base']} 
                      fontSize={['4xl', '4xl', '5xl']}>
              <Text>Saudações!</Text>
              <Highlight
                query={['robótica', 'programação', 'desenvolvimento de tecnologias']}
                styles={{
                  px: ['1', '2', '3'],
                  py: ['0.5', '1', '1.5'],
                  rounded: 'full',
                  bg: 'teal.100',
                  fontSize: ['md', 'lg', 'xl'],
                  lineHeight: ['base', 'tall', 'tall'],
                }}
              >
                Vamos iniciar nossa jornada nas áreas da robótica, programação e desenvolvimento de tecnologias.
              </Highlight>
            </Heading>

          
            {/* <Heading lineHeight="tall">
              <Text fontSize="3xl">Jornada:</Text>
            </Heading> */}
          </Box>
        </Container>

        <Container display="flex" flexDirection="column" gap={5} maxW={isMobile ? '100%' : '70%'}>
         
         
        </Container>
      </Box>
    </>
  );
};

export default Contato;
