import React from "react";
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
  IconButton
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { MdClose, MdRemove, MdCropSquare } from "react-icons/md";

import Header from "../components/Header";
import AcordeonLessonM2 from "../components/AcordeonLessonM2";
import Footer from "../components/Footer";
import TableComponents from "../components/TableComponets";
import HighlightText from "../components/HighlightText";
import YoutubeCard from "../components/YoutubeCard";
import useLoading from "../hooks/useLoading";

// Assets
import sensor from "../assets/sensor_ultra.png";
import sensor_pinos from "../assets/sensor_ultra_pinos.png";
import arduino_com_sensor from "../assets/arduino_com_sensor.png";
import software_arduino from "../assets/Apostila_software.png";

/* --------------------------------------------------------
  COMPONENTE: Barra estilo editor de código
-----------------------------------------------------------*/
const CodeToolbar = () => (
  <Flex
    bg="gray.700"
    p={2}
    borderTopRadius="md"
    alignItems="center"
    justifyContent="space-between"
  >
    <Flex alignItems="center">
      <IconButton icon={<MdClose />} size="xs" aria-label="close" colorScheme="red" variant="ghost" isRound />
      <IconButton icon={<MdRemove />} size="xs" aria-label="minimize" variant="ghost" isRound ml={2} />
      <IconButton icon={<MdCropSquare />} size="xs" aria-label="maximize" variant="ghost" isRound ml={2} />
    </Flex>
    <Text fontSize="sm" color="gray.300">Código Arduino</Text>
  </Flex>
);

/* --------------------------------------------------------
  COMPONENTE: Box de Código Arduino
-----------------------------------------------------------*/
const ArduinoCodeBox = () => (
  <Box
    bg="gray.800"
    borderRadius="md"
    overflowX="auto"
    fontFamily="monospace"
    color="gray.200"
    fontSize={{ base: "sm", md: "md" }}
    boxShadow="lg"
  >
    <CodeToolbar />
    <Box p={4}>
      <Text as="pre" whiteSpace="pre-wrap">{`
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
      `}</Text>
    </Box>
  </Box>
);

/* --------------------------------------------------------
  COMPONENTE: Card de Conexões estilizado
-----------------------------------------------------------*/
const ConnectionStep = ({ color, number, title, children }) => (
  <Flex
    direction={{ base: "column", md: "row" }}
    align="center"
    bg={color}
    p={3}
    borderRadius="md"
    mb={3}
  >
    <Box flex="1" textAlign="center" p={2}>
      <Text fontSize="xl" fontWeight="bold" color="white">
        {number}. {title}
      </Text>
    </Box>

    <Box flex="2" p={2}>
      <Text color="white">{children}</Text>
    </Box>
  </Flex>
);

/* --------------------------------------------------------
  COMPONENTE: Painel com passos de ligação
-----------------------------------------------------------*/
const SensorConnectionBox = () => (
  <Box p={5} maxWidth="600px" margin="auto">
    <Heading as="h3" size="lg" mb={4} textAlign="center" p={2} borderRadius="md">
      Conexão do Sensor HC-SR04 ao Arduino
    </Heading>

    <ConnectionStep color="red.500" number="1" title="Alimentação (VCC)">
      Conecte a saída <strong>5V</strong> do Arduino ao pino <strong>VCC</strong> do sensor.
    </ConnectionStep>

    <ConnectionStep color="black" number="2" title="Terra (GND)">
      Conecte o pino <strong>GND</strong> do Arduino ao pino <strong>GND</strong> do sensor.
    </ConnectionStep>

    <ConnectionStep color="blue.500" number="3" title="Sinal ECHO">
      Conecte a porta <strong>4</strong> ao pino <strong>ECHO</strong> do sensor.
    </ConnectionStep>

    <ConnectionStep color="yellow.500" number="4" title="Sinal TRIG">
      Conecte a porta <strong>3</strong> ao pino <strong>TRIG</strong> do sensor.
    </ConnectionStep>

    <Text mt={4} fontStyle="italic" textAlign="center" bg="gray.100" p={2} borderRadius="md">
      Certifique-se de que a placa esteja desligada durante as conexões.
    </Text>
  </Box>
);

/* --------------------------------------------------------
  COMPONENTE PRINCIPAL
-----------------------------------------------------------*/
const Modulo3 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const loading = useLoading();

  return (
    <>
      <Header />

      {/* Tela de loading */}
      {loading && (
        <Box
          position="fixed"
          inset="0"
          bg="rgba(0,0,0,0.6)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="9999"
        >
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="teal.100" size="xl" />
        </Box>
      )}

      {!loading && (
        <>
          {/* Título */}
          <Container maxW={isMobile ? "100%" : "80%"} mt={6}>
            <Heading lineHeight="tall" fontSize={["4xl", "4xl", "5xl"]} mb={4}>
              <Text>Módulo III</Text>
              <Highlight
                query={["robótica", "programação"]}
                styles={{
                  px: 3,
                  py: 1,
                  rounded: "full",
                  bg: "teal.100",
                  fontSize: ["md", "lg", "xl"]
                }}
              >
                A lógica das máquinas
              </Highlight>
            </Heading>
          </Container>

          {/* Conteúdo */}
          <Container maxW={isMobile ? "100%" : "80%"} mb={10}>
            <Accordion allowMultiple>

              {/* ===========================
                  3. Lógica e Linguagem
              ============================ */}
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading size="sm">3. Lógica e linguagem de programação</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                  <YoutubeCard
                    title="A origem dos robôs"
                    subTitle="Canal: A origem das coisas"
                    url="https://www.youtube.com/embed/5lh3OtqkLMU"
                  />
                </AccordionPanel>
              </AccordionItem>

              {/* ===========================
                  3.2 Régua Eletrônica
              ============================ */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">3.2 Régua eletrônica com Arduino</Box>
                      {isExpanded ? <MinusIcon /> : <AddIcon />}
                    </AccordionButton>

                    <AccordionPanel>

                      <Text fontSize="lg" textAlign="justify" mb={4}>
                        Agora que nosso ambiente está pronto, vamos programar uma régua eletrônica capaz de medir a distância.
                      </Text>

                      <Text fontSize="lg" fontWeight="bold">3.2.1 Sensor HC-SR04</Text>

                      <Text textAlign="justify" mt={2} mb={4}>
                        O sensor HC-SR04 emite pulsos sonoros e calcula a distância através do tempo de eco.
                      </Text>

                      <Image src={sensor} alt="sensor HC-SR04" w="100%" />

                      <Text mt={4}><strong>Esquema elétrico:</strong></Text>
                      <Image src={sensor_pinos} alt="pinos sensor" w="90%" mx="auto" />

                      <Text fontSize="lg" fontWeight="bold" mt={6}>
                        3.2.2 Conectando ao Arduino
                      </Text>

                      <Text textAlign="justify" mt={2}>
                        Você pode usar jumpers ou fios de cabo de rede. Siga o esquema:
                      </Text>

                      <Image src={arduino_com_sensor} alt="arduino e sensor" w="100%" mt={4} />

                      <SensorConnectionBox />

                      <Text fontSize="lg" fontWeight="bold" mt={6}>
                        3.2.3 Codificando nosso projeto
                      </Text>

                      <Text textAlign="justify" mt={2}>
                        Após montar a parte física, vamos ao código:
                      </Text>

                      <ArduinoCodeBox />

                      <Text mt={4}>
                        Salve, embarque o código e visualize o resultado no monitor serial.
                      </Text>

                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              {/* ===========================
                  2.2 Software Arduino
              ============================ */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">2.2 Software Arduino</Box>
                      {isExpanded ? <MinusIcon /> : <AddIcon />}
                    </AccordionButton>

                    <AccordionPanel>
                      <Text fontSize="lg" textAlign="justify">
                        O software Arduino é o IDE onde criamos e enviamos códigos para a placa.
                      </Text>

                      <TableComponents
                        titleOne="Figura 2 - Software Arduino"
                        img={software_arduino}
                        txt1={
                          <>
                            <HighlightText letter="N" text="Menu principal..." />
                            <HighlightText letter="O" text="Verificar/compilar..." />
                            <HighlightText letter="P" text="Enviar para placa..." />
                            <HighlightText letter="Q" text="Novo Sketch..." />
                            <HighlightText letter="R" text="Setup..." />
                            <HighlightText letter="S" text="Loop..." />
                            <HighlightText letter="T" text="Console de compilação..." />
                            <HighlightText letter="U" text="Abrir Sketch..." />
                            <HighlightText letter="V" text="Salvar..." />
                            <HighlightText letter="X" text="Monitor Serial..." />

                            <Text fontSize="lg" mt={4}>Ei, Se avexe não!</Text>
                            <Text><strong>Se esquecer, volte aqui e relembre.</strong></Text>
                          </>
                        }
                      />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

            <AcordeonLessonM2 isMobile={isMobile} />
          </Container>
        </>
      )}

      {!loading && <Footer />}
    </>
  );
};

export default Modulo3;
