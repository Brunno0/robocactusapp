import React, { useEffect } from 'react';
import {
  useBreakpointValue,
  Container,
  Box,
  Heading,
  Text,
    Image,
} from '@chakra-ui/react';

import Header from '../components/Header';

import Footer from '../components/Footer';

const Contato = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    // Coloque aqui qualquer lógica que você deseja executar ao carregar a página.
  }, []);

  return (
    <>
      <Header />

      <Box
        width="100vw"
        paddingTop="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Container gap={10} maxW={isMobile ? '100%' : '80%'}>
          <Box w="100%" textAlign="justify" maxW="100%">
            <Heading
              lineHeight={['tall', 'tall', 'base']}
              fontSize={['4xl', '4xl', '5xl']}
            >
              <Text>Contato: </Text>
              
            </Heading>
          </Box>
        </Container>

        <Container
          display="flex"
          flexDirection="column"
          gap={5}
          maxW={isMobile ? '100%' : '70%'}
        >
        

          {/* Exemplo de card para pessoa desenvolvedora */}
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Image
              src="https://avatars.githubusercontent.com/u/23034099?v=4"
              alt="Nome da Pessoa Desenvolvedora"
              boxSize="150px"
              mx="auto"
              borderRadius={"50%"}
            />
            <Heading as="h2" size="lg" mt={4}>
              Bruno Amorim
            </Heading>
            <Text mt={2}>Desenvolvedor Web</Text>
            <Text fontSize={"10"}>Links no rodapé</Text>
          </Box>
        </Container>
        <Footer />
      </Box>
      
    </>
  );
};

export default Contato;
