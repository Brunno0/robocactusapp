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
  SimpleGrid,
  Stack,
  StackDivider,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';

import Header from '../components/Header';
import AcordeonLessonM2 from '../components/AcordeonLessonM2';
import Footer from '../components/Footer';
import TableComponents from '../components/TableComponets';
import HighlightText from '../components/HighlightText';

import arduino from '../assets/arduino.png';
import arduino_car from '../assets/arduino_uno_caracteristicas.png';
import software_arduino from '../assets/Apostila_software.png';
import useLoading from '../hooks/useLoading';

const Modulo1 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const loading = useLoading();

  // Texto estilizado para os pinos de energia
  const textStyled = (
    <ol>
      <li><strong>Pinos de energia - </strong>esses conectores são utilizados para fornecer saídas de tensão de 5V e 3,3V.</li>
      <li><strong>IOREF - </strong>Este pino é uma referência de entrada/saída. Fornece a referência de tensão na qual o microcontrolador opera, podendo ser adaptada para 3,3V ou 5V.</li>
      <li><strong>RESET – </strong>Pino conectado ao botão RESET, pode ser utilizado para resetar a placa de forma externa.</li>
      <li><strong>3,3V – </strong>Fornece tensão de 3,3V para alimentação de shields com corrente máxima de 50 mA.</li>
      <li><strong>5V – </strong>Fornece tensão de 5V com corrente de 50 mA.</li>
      <li><strong>GND – </strong>Terra, filtro de densidade neutra.</li>
      <li><strong>VIN – </strong>Pino para alimentar a placa a partir de uma fonte externa, seja um shield ou uma bateria. Possui um regulador de tensão que estabiliza o valor de entrada em 5V.</li>
    </ol>
  );

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
                <Text>Módulo II</Text>
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
                  E o Arduino, que tal?
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
                      <Heading size="sm">2. A plataforma Arduino</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text fontSize="lg" textAlign="justify">
                    Criado por Massimo Banzi em 2005, na Itália, o Arduino é uma placa eletrônica versátil usada para prototipagem de robôs, testes, modificação e reutilização de componentes conforme necessário. Ele consiste em duas partes principais: hardware, que é a própria placa física, e software, que é o ambiente de desenvolvimento do Arduino.
                  </Text>
                  <br />
                  <Text fontSize="lg" textAlign="justify">
                    Funciona programando o microprocessador, que por sua vez controla o armazenamento, a memória e os circuitos de entrada e saída (portas). Além disso, é possível adicionar outras peças para ampliar sua funcionalidade, conhecidas como Shields (escudos). Esses escudos podem ser diversos, como sensores de presença, sensores de temperatura, receptores GPS, atuadores, displays de cristal líquido (LCD), módulos de controle de motor, Ethernet, wireless, Bluetooth e outros componentes necessários para o seu projeto.
                  </Text>
                  <br />
                  <Text fontSize="lg" textAlign="justify">
                    Existem vários modelos de Arduino disponíveis no mercado, cada um com funções específicas. Eles são utilizados para uma variedade de aplicações, desde a construção de drones e controles de videogame até microplacas para pequenos sistemas, e até mesmo placas com mais portas para interagir com diversos componentes. Você pode encontrar alguns desses modelos e suas funcionalidades no site:
                    <a href="https://www.arduino.cc/en/Main/Products" target="_blank" rel="noopener noreferrer"> www.arduino.cc/en/Main/Products</a>
                  </Text>
                  <br />
                  <Text fontSize="lg" textAlign="justify">
                    Para nossos projetos, optamos pelo Arduino Uno, como mostrado na Figura 1. Esta placa é versátil, acessível e capaz de atender tanto a projetos simples quanto robustos.
                  </Text>
                  <br />
                  <TableComponents
                    titleOne="Arduino UNO"
                    img={arduino}
                    txt1={<Text fontSize="lg" textAlign="justify" />}
                  />
                </AccordionPanel>
              </AccordionItem>

              {/* Seção 2.1: Hardware Arduino Uno */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          2.1 Hardware Arduino Uno
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
                        A placa Arduino Uno possui atualmente três versões disponíveis. Seu código e design são abertos, o que significa que podem ser facilmente replicados, resultando na existência de várias placas de outros fabricantes no mercado. Vamos explorar algumas das funções e características do seu hardware.
                      </Text>
                      <br />
                      <TableComponents
                        titleOne="Figura 1 - Arduino Uno"
                        img={arduino_car}
                        txt1={
                          <Text fontSize="lg" textAlign="justify">
                            <HighlightText letter="A" text="Conector USB - conecta o Arduino ao computador e funciona como fonte de alimentação (5v)." />
                            <HighlightText letter="B" text="Conector de alimentação (DC) - Jack de alimentação de energia externa. Caso precise utilizar uma fonte externa, ou ainda, não utilizar a porta USB como fonte de energia. A tensão de entrada é de 7 a 20 Volts, porém, tensões maiores que 12v podem ocasionar danos a placa." />
                            <HighlightText letter="C" text="ATmega16u2 - Microcontrolador responsável por estabelecer a comunicação e tradução dos sinais USB / Serial." />
                            <HighlightText letter="D" text={textStyled} />
                            <HighlightText letter="E" text="Portas analógicas - O microcontrolador ATmega328 possui um conversor (A/D) de grandezas de 10 bits de resolução, com a capacidade de converter sinais digitais para analógicos. Essas portas são destinadas ao uso de componentes que trabalham com medidas variando entre 0V e 5V, como por exemplo, um potenciômetro que controla a luminosidade de um LED. Quanto menor o valor, mais fraca será a luz do LED; quanto maior o valor, maior será sua luminosidade." />
                            <HighlightText letter="F" text="ATmega328P - É o microcontrolador do Arduino Uno. Apesar de pequeno, ele contém circuitos de memória, um processador e interfaces para processamento de informações e gerenciamento das portas de entrada e saída. É no microcontrolador que o código que programamos é armazenado." />
                            <HighlightText letter="G" text="ICSP do ATmega328P - Os pinos ICSP (In-Circuit Serial Programming) são a porta para programar diretamente os microcontroladores da placa usando o protocolo serial SPI (Serial Peripheral Interface), caso seja necessário modificar o firmware ou o bootloader do microcontrolador." />
                            <HighlightText letter="H" text="Led de Status – Led que informa se seu Arduino está ligado." />
                            <HighlightText letter="I" text="LEDs porta 13 e TX e RX – Ao lado da porta 13 há um LED que pode ser utilizado para testes. Já os LEDs TX e RX são responsáveis por sinalizar a transmissão e recepção de dados entre a placa e o computador ou outra placa." />
                            <HighlightText letter="J" text="Portas digitais – O Arduino Uno possui 14 portas digitais (0 a 13) que trabalham enviando ou recebendo impulsos elétricos com valores lógicos de ligado ou desligado. Seu valor lógico alto, HIGH, é de 5V, e seu nível lógico baixo, LOW, é de 0V. Através dessas portas, controlaremos peças, atuadores, sensores e motores em nossos projetos. Observe que algumas portas estão marcadas com um “~”; essas são as portas PWM (Pulse Width Modulation), capazes de variar a largura de um pulso digital ligado ou desligado para valores entre 0 e 255, possibilitando o controle de velocidade, intensidade de brilho de LEDs, posicionamento de motores, entre outros." />
                            <HighlightText letter="L" text="ICSP do ATmega16u2 – porta para programar diretamente o microcontrolador ATmega16u2." />
                            <HighlightText letter="M" text="Botão de Reset – Serve para reiniciar o Arduino, tem o mesmo efeito de desligar e ligar a placa." />
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

export default Modulo1;
