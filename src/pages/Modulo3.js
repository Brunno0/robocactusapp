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
  Flex

} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import Header from '../components/Header';
import AcordeonLessonM2 from '../components/AcordeonLessonM2';
import Footer from '../components/Footer';
import YoutubeCard from '../components/YoutubeCard';
import useLoading from '../hooks/useLoading';

import sensor from '../assets/sensor_ultra.png';
import sensor_pinos from '../assets/sensor_ultra_pinos.png';
import monitor_serial from '../assets/monitor_serial.png';
import arduino_com_sensor from '../assets/arduino_com_sensor.png';
import CodeArduinoStyle from '../components/CodeArduinoStyle';

const arduinoCode = `
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
  `;

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
                        Após montar a parte física do projeto, vamos agora desenvolver o programa:
                      </Text>
                      <br />
                      
                        {/* CODE ARDUINO TEST HOOK */}

                          <CodeArduinoStyle 
                            title="Código Arduino - Lendo dados do sensor"
                            code={arduinoCode}
                          />
                       <br/>
                      <Text fontSize="lg" textAlign="justify">
                      Salve, embarque o código e visualize os resultados no monitor serial:
                      </Text>

                      <Box maxWidth="50%" height="auto">
                        <Image src={monitor_serial} alt="conexão arduino e sensor" width="100%" height="auto" />
                      </Box>
                      <br/>
                      <Text fontSize="lg" textAlign="justify">
                     Vamos ao código!
                      </Text>
                      <br/>
                      <CodeArduinoStyle 
                            title="Include"
                            code="#include <Ultrasonic.h>"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                      <strong>Include -</strong> Aqui, estamos incluindo a biblioteca Ultrasonic em nosso programa. Com isso, todas as funções disponíveis na biblioteca tornam-se acessíveis para utilização.
                      </Text>
                     
                      <br/>
                      <CodeArduinoStyle 
                            title="Ultrasonic"
                            code="Ultrasonic sensor(3, 4);"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                      <strong> Ultrasonic </strong> - Nessa linha está a configuração da variável “sensor”, indicando que as portas 3 e 4 estão sendo utilizadas como TRIGe ECHO.
                      </Text>
                      <br/>
                      <CodeArduinoStyle 
                            title="Serial begin"
                            code="Serial.begin(9600);"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                      <strong> Serial Begin </strong> - Essa função configura a taxa de comunicação em bits por segundo com o monitor serial, nesse caso 9600.
                      </Text>

                      <br/>
                      <CodeArduinoStyle 
                            title="Serial.println;"
                            code="Serial.println(''Lendo dados do sensor...'');"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                      <strong> Serial.println </strong> Com função Serial.println podemos imprimir valores, variáveis, textos e afins. Tal como “printf” em C, ou ainda “System.out.println” em java.

                      </Text>
                      

                      <br/>
                      <CodeArduinoStyle 
                            title="float centimetros"
                            code="float centimetros;"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                      <strong> float centimetros </strong> - Aqui declaramos a variável "centímetros"( sem acento) do tipo float, isso  significa que ela pode armazenar valores com ponto flutuante, exemplo : “1,22”.

                      </Text>


                      <br/>
                      <CodeArduinoStyle 
                            title="long microsec"
                            code="long microsec = sensor.timing();"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                    <strong>long microsec</strong> - Nessa linha, estamos declarando a variável microsec do tipo long, que é utilizada para armazenar o tempo em microssegundos retornado pela função sensor.timing(). Essa função faz a leitura do tempo de viagem do sinal do sensor ultrassônico, que é essencial para calcular a distância.

                      </Text>

                      <br/>
                      <CodeArduinoStyle 
                            title="centimetros = sensor.convert"
                            code="centimetros = sensor.convert(microsec, Ultrasonic::CM);"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                    <strong>sensor.convert(microsec, Ultrasonic::CM)</strong> - A função sensor.convert(microsec, Ultrasonic::CM) converte o valor de tempo em microssegundos (microsec) para uma medida de distância em centímetros. Ela utiliza a constante Ultrasonic::CM para especificar a unidade de medida desejada. O cálculo é baseado na velocidade do som no ar (aproximadamente 0,0343 cm por microssegundo), e o resultado é armazenado na variável centimetros. Esse valor pode ser usado posteriormente no programa para exibir a distância medida, processá-la ou tomar decisões com base nessa informação.



                      </Text>
                      

                      <br/>
                      <CodeArduinoStyle 
                            title="(''Distancia em cm:'')"
                            code="Serial.print(''Distancia em cm:'');"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                    <strong>Serial.print</strong> - Aqui imprimimos a frase "Distancia em cm:" no monitor serial 
                      </Text>

                      <br/>
                      <CodeArduinoStyle 
                            title="(centimetros);"
                            code="Serial.print(centimetros);"
                          />
                          <br/>
                      <Text fontSize="lg" textAlign="justify">
                    <strong>Serial.print(centimetros);</strong> - E por fim, imprimimos no monitor serial o valor da variável “centímetros”, ou seja, a distância atual entre o sensor e objeto.
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
