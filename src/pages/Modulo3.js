import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Highlight,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
  Spinner,
  Image,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';


import Header from '../components/Header';
import AcordeonLessonM2 from '../components/AcordeonLessonM2';
import Footer from '../components/Footer';
import TableComponents from '../components/TableComponets';
import HighlightText from '../components/HighlightText';

import sensor from '../assets/sensor_ultra.png';
import arduino_car from '../assets/arduino_uno_caracteristicas.png';
import software_arduino from '../assets/Apostila_software.png';
import useLoading from '../hooks/useLoading';
import YoutubeCard from '../components/YoutubeCard';

const Modulo3 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const loading = useLoading();


  return (
    <>
      <Header />

      {loading ? (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.6)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="9999"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.100"
            size="xl"
          />
        </Box>
      ) : (
        <>
          <Container gap={10} maxW={isMobile ? '100%' : '80%'} mt={6}>
            <Box w="100%" textAlign="justify">
              <Heading
                lineHeight={['tall', 'tall', 'base']}
                fontSize={['4xl', '4xl', '5xl']}
                mb={4}
              >
                <Text>Módulo III</Text>
                <Highlight
                  query={['robótica', 'programação', 'robótica']}
                  styles={{
                    px: ['1', '2', '3'],
                    py: ['0.5', '1', '1.5'],
                    rounded: 'full',
                    bg: 'teal.100',
                    fontSize: ['md', 'lg', 'xl'],
                    lineHeight: ['base', 'tall', 'tall'],
                  }}
                >
                   A lógica das máquinas
                </Highlight>
              </Heading>
            </Box>
          </Container>

          <Container
            display="flex"
            flexDirection="column"
            gap={5}
            maxW={isMobile ? '100%' : '80%'}
            mb={10}
          >
            <Accordion allowMultiple>
              {/* Seção 2: A plataforma Arduino */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Heading size="sm">3. Lógica e linguagem de programação</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <YoutubeCard
                      title={'A origem dos robôs'}
                      subTitle={'Canal: A origem das coisas'}
                      style={{ width: '100%' }}
                      url={'https://www.youtube.com/embed/5lh3OtqkLMU'}
                    />
                  <br />
                
                </AccordionPanel>
              </AccordionItem>

              {/* Seção 2.1: Hardware Arduino Uno */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          3.2 Régua eletrônica com Arduino
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text fontSize="lg" textAlign="justify">
                      Agora que nosso ambiente está pronto, vamos programar uma régua eletrônica capaz de apresentar a distância em centímetros entre um sensor ultrassônico e um objeto.
                      </Text>
                      <br />

                      <Box maxWidth="100%" height="auto">
      <Image src={sensor} alt="Descrição da imagem" width="100%" height="auto" />
    </Box>
                      <TableComponents
                        titleOne="Figura 1 - Arduino Uno"
                        img={arduino_car}
                        txt1={
                          <Text fontSize="lg" textAlign="justify">
                           
                            <Text fontSize="lg" textAlign="justify">Ei, Se avexe não!</Text>
                            <Text><strong>Se você esquecer alguma parte, volte aqui e relembre</strong></Text>
                          </Text>
                        }
                      />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              {/* Seção 2.2: Software Arduino */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          2.2 Software Arduino
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text fontSize="lg" textAlign="justify">
                        <p>O programa que utilizaremos para desenvolver nossos códigos é um Ambiente de Desenvolvimento Integrado (IDE, na sigla em inglês). Ele foi projetado especificamente para compilar e enviar códigos para a placa Arduino. O software está disponível gratuitamente no site oficial da plataforma: <a href="https://www.arduino.cc/en/software" target="_blank">https://www.arduino.cc/en/software</a>. Para começar, basta selecionar a versão compatível com o seu sistema operacional, fazer o download e realizar a instalação.</p>
                        <p>A linguagem de programação utilizada na plataforma Arduino é baseada em C++, com a inclusão de bibliotecas e funções específicas para facilitar o desenvolvimento de projetos. No ambiente Arduino, os projetos são chamados de <i>sketches</i>. A seguir, vamos explorar esse ambiente. Após a instalação do programa você encontrará a seguinte interface:</p>
                        <br />
                        <TableComponents
                          titleOne="Figura 2 - Software Arduino"
                          img={software_arduino}
                          txt1={
                            <Text fontSize="lg" textAlign="justify">
                              <HighlightText letter="N" text="Menu principal - A barra de menu da IDE conta com uma série de funções importantes como importar códigos de exemplo na aba Arquivos, ou ainda configurar a porta COM de conexão Arduino/computador na aba Ferramentas, entre outras." />
                              <HighlightText letter="O" text="Verificar/compilar - Essa função é responsável por compilar o código, verificando possíveis erros de sintaxe, semântica e estrutura. Ela analisa se o código está escrito corretamente, identifica a ausência de sinais ou caracteres necessários e aponta falhas que possam comprometer o funcionamento do projeto." />
                              <HighlightText letter="P" text="Enviar para placa - Após verificar seu Sketch, é com esse botão que embarcamos o código na placa." />
                              <HighlightText letter="Q" text="Novo Sketch - Cria um novo projeto." />
                              <HighlightText letter="R" text="Setup: Quando a plataforma é iniciada, a primeira função executada pelo Arduino é o setup(). Nela, são configuradas as portas, bibliotecas, variáveis e todos os parâmetros necessários para o funcionamento do programa. Essa função é executada apenas uma vez, seja ao ligar a placa ou ao resetá-la." />
                              <HighlightText letter="S" text="Loop: Após a execução do setup(), a função loop() é chamada. Ela é o núcleo principal do código, onde são programadas as ações e comportamentos dos projetos robóticos. Uma vez que o código é carregado na placa, essa função entra em um ciclo infinito, repetindo os comandos de forma contínua enquanto a placa estiver ligada." />
                              <HighlightText letter="T" text="Console de Compilação: Nessa área, são exibidos os erros de compilação, problemas de comunicação, falhas no carregamento do código e erros de sintaxe. Além de identificar e numerar os erros, o console fornece informações detalhadas que ajudam a diagnosticar e corrigir as falhas, facilitando a busca por soluções." />
                              <HighlightText letter="U" text="Abrir Sketch: Essa função permite abrir um sketch salvo no seu computador ou em um dispositivo de armazenamento externo, como um pendrive ou HD externo. É útil para acessar projetos anteriores ou continuar trabalhos já iniciados." />
                              <HighlightText 
                              letter="V" 
                              text= "Salvar: Esse botão permite salvar as alterações feitas no seu código. É fundamental lembrar de salvar seus sketches em um local seguro e de fácil acesso, como pastas organizadas no computador ou em dispositivos de armazenamento externo, para evitar perdas de dados. "/>

                              <HighlightText 
                              letter="X" 
                              text= "Monitor Serial: Essa ferramenta permite a comunicação entre o computador e o Arduino via conexão USB. Com ela, você pode visualizar dados recebidos de sensores ou enviar comandos diretamente para a placa, facilitando a depuração e o controle do seu projeto."/>

                        

                              <Text fontSize="lg" textAlign="justify"> Ei, Se avexe não! </Text>

                              <Text><strong>se você esquecer alguma parte, volte aqui e relembre</strong> </Text>
                              <br />
                              
                                            
                            </Text>} />
                       
                      </Text>
                      
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

             

            </Accordion>

            <AcordeonLessonM2 isMobile={isMobile} />
          </Container>
        </>
      )}

      {loading ? null : (
        <Footer />
      )}

    </>
  );
};

export default Modulo3;
