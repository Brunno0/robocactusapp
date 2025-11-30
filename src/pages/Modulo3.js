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
  VStack,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { MdClose, MdRemove, MdCropSquare } from 'react-icons/md';
import Header from '../components/Header';
import AcordeonLessonM2 from '../components/AcordeonLessonM2';
import Footer from '../components/Footer';
import TableComponents from '../components/TableComponets';
import HighlightText from '../components/HighlightText';
import YoutubeCard from '../components/YoutubeCard';
import useLoading from '../hooks/useLoading';

import sensor from '../assets/sensor_ultra.png';
import sensor_pinos from '../assets/sensor_ultra_pinos.png';
import arduino_car from '../assets/arduino_uno_caracteristicas.png';
import software_arduino from '../assets/Apostila_software.png';
import arduino_com_sensor from '../assets/arduino_com_sensor.png';

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
              {/* Seção 3: Lógica e linguagem de programação */}
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

              {/* Seção 3.2: Régua eletrônica com Arduino */}
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
                      <Text fontSize="lg" textAlign="justify">
                        <strong>3.2.1 Sensor - HC-SR04</strong>
                      </Text>
                      <br />
                      <Text fontSize="lg" textAlign="justify">
                        O sensor HC-SR04 emite pulsos sonoros em uma frequência de 40 kHz, que se propagam na velocidade do som. Quando o pulso encontra um objeto, o sinal é refletido e retorna ao sensor na forma de eco. A distância entre o sensor e o objeto é calculada com base no tempo de ida e volta do pulso, semelhante ao sistema de localização de objetos utilizado pelos morcegos.
                      </Text>
                      <Box maxWidth="100%" height="auto">
                        <Image src={sensor} alt="sensor HC-SR04" width="100%" height="auto" />
                      </Box>
                      <Text fontSize="lg" textAlign="justify">
                        Esquema elétrico do sensor HC-SR04:
                      </Text>
                      <br />
                      <Box maxWidth="90%" height="auto">
                        <Image src={sensor_pinos} alt="Esquema elétrico do sensor HC-SR04" width="100%" height="auto" />
                      </Box>
                      <Text fontSize="lg" textAlign="justify">
                        <strong>3.2.2 Conectando o sensor ao Arduino</strong>
                      </Text>
                      <br />
                      <Text fontSize="lg" textAlign="justify">
                        Para conectar o sensor HC-SR04 ao Arduino, utilizaremos cabos coloridos conhecidos como jumpers. Esses cabos possuem um fio interno de cobre que transmite sinais elétricos de uma extremidade à outra. Caso você não tenha jumpers, uma alternativa é utilizar os fios internos de um cabo de rede (RJ45), independentemente da cor. Acompanhe o esquema do projeto e siga as etapas de montagem indicadas.
                      </Text>
                      <br />
                      <Box maxWidth="100%" height="auto">
                        <Image src={arduino_com_sensor} alt="conexão arduino e sensor" width="100%" height="auto" />
                      </Box>
                      <Box p={5} maxWidth="600px" margin="auto">
                        <Heading as="h3" size="lg" mb={4} textAlign="center" p={2} borderRadius="md">
                          Conexão do Sensor HC-SR04 ao Arduino
                        </Heading>
                        <br />
                        {/* Passo 1: Alimentação (VCC) */}
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          align="center"
                          bg="red.500"
                          p={3}
                          borderRadius="md"
                          mb={3}
                        >
                          <Box flex="1" textAlign="center" p={2}>
                            <Text fontSize="xl" fontWeight="bold" color="white">
                              1. Alimentação (VCC)
                            </Text>
                          </Box>
                          <Box flex="2" p={2}>
                            <Text color="white">
                              Conecte a saída <strong>5V</strong> do Arduino ao pino <strong>VCC</strong> do sensor.
                            </Text>
                          </Box>
                        </Flex>
                        {/* Passo 2: Terra (GND) */}
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          align="center"
                          bg="black"
                          p={3}
                          borderRadius="md"
                          mb={3}
                        >
                          <Box flex="1" textAlign="center" p={2}>
                            <Text fontSize="xl" fontWeight="bold" color="white">
                              2. Terra (GND)
                            </Text>
                          </Box>
                          <Box flex="2" p={2}>
                            <Text color="white">
                              Conecte o pino <strong>GND</strong> do Arduino ao pino <strong>GND</strong> do sensor.
                            </Text>
                          </Box>
                        </Flex>
                        {/* Passo 3: Sinal ECHO */}
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          align="center"
                          bg="blue.500"
                          p={3}
                          borderRadius="md"
                          mb={3}
                        >
                          <Box flex="1" textAlign="center" p={2}>
                            <Text fontSize="xl" fontWeight="bold" color="white">
                              3. Sinal ECHO
                            </Text>
                          </Box>
                          <Box flex="2" p={2}>
                            <Text color="white">
                              Conecte a porta <strong>4</strong> da placa ao pino <strong>ECHO</strong> do sensor.
                            </Text>
                          </Box>
                        </Flex>
                        {/* Passo 4: Sinal TRIG */}
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          align="center"
                          bg="yellow.500"
                          p={3}
                          borderRadius="md"
                          mb={3}
                        >
                          <Box flex="1" textAlign="center" p={2}>
                            <Text fontSize="xl" fontWeight="bold" color="white">
                              4. Sinal TRIG
                            </Text>
                          </Box>
                          <Box flex="2" p={2}>
                            <Text color="white">
                              Conecte a porta <strong>3</strong> da placa ao pino <strong>TRIG</strong> do sensor.
                            </Text>
                          </Box>
                        </Flex>
                        {/* Nota final */}
                        <Text mt={4} fontStyle="italic" textAlign="center" bg="gray.100" p={2} borderRadius="md">
                          Certifique-se de que a placa esteja desligada durante as conexões.
                        </Text>
                      </Box>
                      <Text fontSize="lg" textAlign="justify">
                        <strong>3.2.3 Codificando nosso projeto</strong>
                      </Text>
                      <br />
                      <Text fontSize="lg" textAlign="justify">
                        Após montar a parte física do projeto, vamos agora desenvolver o programa.
                      </Text>
                      <br />
                      <Box
                        bg="gray.800"
                        borderRadius="md"
                        overflowX="auto"
                        maxWidth="100%"
                        fontFamily="monospace"
                        color="gray.200"
                        fontSize={{ base: "sm", md: "md" }}
                        boxShadow="lg"
                      >
                        {/* Barra de título com botões */}
                        <Flex
                          bg="gray.700"
                          p={2}
                          borderTopRadius="md"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Flex alignItems="center">
                            <IconButton
                              icon={<MdClose />}
                              size="xs"
                              aria-label="Fechar"
                              colorScheme="red"
                              variant="ghost"
                              isRound
                            />
                            <IconButton
                              icon={<MdRemove />}
                              size="xs"
                              aria-label="Minimizar"
                              colorScheme="gray"
                              variant="ghost"
                              isRound
                              ml={2}
                            />
                            <IconButton
                              icon={<MdCropSquare />}
                              size="xs"
                              aria-label="Maximizar"
                              colorScheme="gray"
                              variant="ghost"
                              isRound
                              ml={2}
                            />
                          </Flex>
                          <Text fontSize="sm" color="gray.300" ml={2}>
                            Código Arduino
                          </Text>
                        </Flex>
                        {/* Código Arduino */}
                        <Box p={4}>
                          <Text as="pre" whiteSpace="pre-wrap">
                            {`
#include <Ultrasonic.h>

Ultrasonic sensor(3, 4);

void setup() {
    Serial.begin(9600);
    Serial.println("Lendo dados do sensor...");
}

void loop() {
    float centimetros;
    long microsec = sensor.timing();

    centimetros = sensor.convert(microsec, Ultrasonic::CM);

    Serial.print("Distancia em cm: ");
    Serial.print(centimetros);
    delay(1000);
}
                            `}
                          </Text>
                        </Box>
                      </Box>
                      <br />
                      <Text fontSize="lg" textAlign="justify">
                        Salve, embarque o código e visualize os resultados no monitor serial
                      </Text>
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
                        <p>O programa que utilizaremos para desenvolver nossos códigos é um Ambiente de Desenvolvimento Integrado (IDE, na sigla em inglês). Ele foi projetado especificamente para compilar e enviar códigos para a placa Arduino. O software está disponível gratuitamente no site oficial da plataforma: <a href="https://www.arduino.cc/en/software" target="_blank" rel="noreferrer">https://www.arduino.cc/en/software</a>. Para começar, basta selecionar a versão compatível com o seu sistema operacional, fazer o download e realizar a instalação.</p>
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
                                text="Salvar: Esse botão permite salvar as alterações feitas no seu código. É fundamental lembrar de salvar seus sketches em um local seguro e de fácil acesso, como pastas organizadas no computador ou em dispositivos de armazenamento externo, para evitar perdas de dados. " />

                              <HighlightText
                                letter="X"
                                text="Monitor Serial: Essa ferramenta permite a comunicação entre o computador e o Arduino via conexão USB. Com ela, você pode visualizar dados recebidos de sensores ou enviar comandos diretamente para a placa, facilitando a depuração e o controle do seu projeto." />

                              <Text fontSize="lg" textAlign="justify"> Ei, Se avexe não! </Text>
                              <Text><strong>se você esquecer alguma parte, volte aqui e relembre</strong> </Text>
                              <br />
                            </Text>
                          }
                        />
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