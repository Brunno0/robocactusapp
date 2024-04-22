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
  Image,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import A_image from '../assets/A.png'
import B_image from '../assets/B_imagem.png'

import Header from '../components/Header';
import AcordeonLesson from '../components/AcordeonLesson';
import Footer from '../components/Footer';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import YoutubeCard from '../components/YoutubeCard';
import TableComponents from '../components/TableComponets';
import ABB from '../assets/ABB_IRB_6700_0002.png';
import KUKA from '../assets/KR 6 R900.png';
import arduino from '../assets/arduino.png';
import arduino_car from '../assets/arduino_uno_caracteristicas.png'
import useLoading from '../hooks/useLoading';
import Cards from '../components/Cards';

const Modulo1 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const loading = useLoading();
  return (
    <>
      <Header />

      {loading ? (
        <>
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
          </Box></>
      ) : (
        <>
          <Container gap={10} maxW={isMobile ? '100%' : '80%'}>
            <Box w="100%" textAlign="justify" maxW="100%">
              <Heading
                lineHeight={['tall', 'tall', 'base']}
                fontSize={['4xl', '4xl', '5xl']}
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
          >

            <Accordion allowMultiple>
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
                  <Text>
                    <Text fontSize="lg" textAlign="justify">
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
                      <a href="https://www.arduino.cc/en/Main/Products"> www.arduino.cc/en/Main/Products</a>
                      </Text>
                      <br/>
                      <Text fontSize="lg" textAlign="justify">

                      Para nossos projetos, optamos pelo Arduino Uno, como mostrado na Figura 1. Esta placa é versátil, acessível e capaz de atender tanto a projetos simples quanto robustos.
                    </Text>

                      <br />

                      <TableComponents
                            titleOne={"Arduino UNO"}
                            img={arduino}

                            txt1={<Text fontSize="lg" textAlign="justify">
                              <br /> 
                            </Text>}

                          
                          />
                      
                    </Text>
                  </Text>
                </AccordionPanel>
              </AccordionItem>

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
                        <Text fontSize="lg" textAlign="justify">
                        A placa Arduino Uno possui atualmente três versões disponíveis. Seu código e design são abertos, o que significa que podem ser facilmente replicados, resultando na existência de várias placas de outros fabricantes no mercado. Vamos explorar algumas das funções e características do seu hardware.
                        </Text>{' '}
                        <br />

             
                        <Text>
                        <Box boxSize='sm'>
              <Image src={arduino_car} alt='Arduino Uno' />
            </Box>
            <Box boxSize='sm'>
              <Image src={A_image} alt='Arduino Uno' />
              <Image src={B_image} alt='Arduino Uno' />
            </Box>
                        
                        </Text>
                      </Text>

                      <Text fontSize="lg" textAlign="justify">
                        <br />
                        <Text><strong>Alguns tipos de robôs industriais</strong></Text>
                        <br />
                        <Text>
                          <strong>Robôs Manipuladores:</strong> São robôs com braços articulados compostos por várias juntas (geralmente seis) que lhes permitem movimentar-se em diferentes direções. Eles são amplamente utilizados em tarefas como soldagem, pintura, montagem e manipulação de materiais.

                          <TableComponents
                            titleOne={"ABB IRB 6700"}
                            img={arduino_car}

                            txt1={<Text fontSize="lg" textAlign="justify">
                              <br /> Um exemplo de modelo de robô manipulador é o "<em>ABB IRB 6700</em>".<br />
                              <Text><strong>ABB</strong> é uma das principais empresas fabricantes de robôs industriais e o modelo <em>IRB 6700</em> faz parte da série <em>IRB 6700</em>, que é projetada para aplicações de alta performance e capacidade de carga.</Text>
                              <br />
                              <Text>
                                <strong>Características do ABB IRB 6700:</strong>
                              </Text>
                              <Text>
                                - Possui vários modelos com capacidades de carga útil que variam de 150 kg a 300 kg.
                              </Text>
                              <Text>
                                - Pode ter até seis eixos articulados para movimentos precisos e flexíveis.
                              </Text>
                              <Text>
                                - É adequado para tarefas como soldagem, manuseio de materiais pesados, montagem, entre outras aplicações industriais.
                              </Text>
                              <Text>
                                - Tem alta velocidade e precisão, o que o torna adequado para linhas de produção com alto rendimento.
                              </Text>
                              <Text>
                                - É equipado com controladores avançados e recursos de segurança para garantir operações eficientes e seguras na indústria.
                              </Text>
                              <Text>
                                É importante observar que o modelo <em>IRB 6700</em> é apenas um exemplo de robô manipulador, e existem muitos outros modelos e fabricantes de robôs industriais disponíveis no mercado, cada um com características e capacidades específicas para atender a diversas necessidades de automação industrial.
                              </Text>
                            </Text>}

                            titleTwo={"KR 6 R900"}
                            img2={KUKA}
                            txt2={
                              <Text fontSize="lg" textAlign="justify">
                                <br />
                                <Text>Outro modelo de robô bastante usado na indústria de robótica é o "<em>KUKA KR 6 R900</em>".
                                  Essa série de robôs da KUKA é conhecida pela sua <strong>alta precisão, velocidade e versatilidade</strong>, sendo amplamente utilizada em várias aplicações industriais, incluindo montagem, soldagem, manuseio de materiais, entre outras.</Text>
                                <br />
                                <Text>
                                  O <em>KUKA KR 6 R900</em> é um robô de <strong>seis eixos</strong> que pode ser montado no chão ou suspenso em uma estrutura. Ele é projetado para trabalhar em espaços confinados, tornando-o adequado para <strong>linhas de produção com espaço limitado</strong>. Além disso, possui uma <strong>carga útil de até 6 kg</strong>, permitindo que manipule peças com diferentes pesos.
                                </Text>
                                <Text>
                                  Assim como o <em>ABB IRB 6700</em>, o <em>KUKA KR 6 R900</em> também é conhecido por sua <strong>confiabilidade e facilidade de programação</strong>, o que o torna uma escolha popular na indústria de robótica para melhorar a eficiência e a automação dos processos de fabricação.
                                </Text>
                              </Text>}
                          />

                          <br />
                        </Text>
                        <Text>
                          <strong>Robôs SCARA (Selective Compliance Assembly Robot Arm):</strong> Estes robôs têm três ou quatro eixos e são projetados para movimentar-se no plano horizontal, com capacidade de alcance vertical limitado. Eles são ideais para aplicações de montagem e manipulação de peças em linhas de produção.
                        </Text>
                        <Text>
                          <strong>Robôs Cartesianos:</strong> Também conhecidos como robôs de movimento linear, esses robôs se movem ao longo de eixos cartesianos (X, Y, Z) e são frequentemente usados em operações de pick-and-place e na fabricação de componentes eletrônicos.
                        </Text>
                        <Text>
                          <strong>Robôs Delta:</strong> Possuem uma estrutura paralela que se assemelha a um tripé ou uma torre, com eixos conectados a juntas esféricas. Esses robôs são conhecidos por sua alta velocidade e são comumente utilizados em tarefas de picking, embalagem e montagem rápida.
                        </Text>
                        <Text>
                          <strong>Robôs Colaborativos (Cobots):</strong> Diferente de outros robôs industriais, os cobots são projetados para interagir e trabalhar em colaboração com seres humanos, geralmente sem a necessidade de proteções físicas. Eles são usados em várias aplicações, como montagem, manuseio de materiais e tarefas de precisão, onde a colaboração humana é benéfica.
                        </Text>
                        <Text>
                          <strong>Robôs Autônomos:</strong> Esses robôs podem operar de forma independente sem controle humano direto e podem ser usados em tarefas como transporte de materiais, inspeções autônomas e navegação em espaços complexos.
                        </Text>
                        <Text>
                          <strong>Robôs Exoesqueletos:</strong> Embora não sejam utilizados em todas as indústrias, esses robôs podem ser usados em aplicações industriais para auxiliar os trabalhadores com tarefas que requerem força extra ou suporte ergonômico.
                        </Text>
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>


              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          1.2 Robótica Educacional
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text fontSize="md" textAlign="justify">
                        <p>A Robótica Educacional é uma área interdisciplinar que combina diversos campos do conhecimento, como lógica matemática, mecânica, eletrônica, programação e inteligência artificial.</p>
                        <p>Ela consiste em utilizar a robótica como uma ferramenta pedagógica para integrar os processos de aprendizagem com a prática da construção e programação de robôs. Essa abordagem estimula o pensamento computacional e promove a aprendizagem de forma lúdica e divertida.</p>
                        <br />
                        <Text>
                          <strong>As vantagens de estudar Robótica Educacional são diversas:</strong>
                          <br />
                          <br />
                          <strong>Aprendizagem Interdisciplinar:</strong> A Robótica Educacional abrange diferentes áreas do conhecimento, permitindo que os alunos explorem conceitos de matemática, física, eletrônica, informática e outras disciplinas de forma integrada.
                          <br />
                          <strong>Estímulo à Criatividade:</strong> Ao projetar e construir robôs, os estudantes são incentivados a exercitar sua criatividade, buscando soluções inovadoras para os desafios propostos.
                          <br />
                          <strong>Desenvolvimento do Pensamento Computacional:</strong> A programação dos robôs exige a criação de algoritmos e sequências lógicas, o que favorece o desenvolvimento do pensamento computacional e do raciocínio lógico.
                          <br />
                          <strong>Aprendizado Significativo:</strong> A experiência prática de construir e programar robôs torna o aprendizado mais significativo, pois os alunos podem ver diretamente os resultados de suas ações e entender como os conceitos teóricos se aplicam na prática.
                          <br />
                          <strong>Autonomia e Protagonismo:</strong> Na Robótica Educacional, os alunos se tornam protagonistas do próprio aprendizado, pois são responsáveis por tomar decisões, resolver problemas e alcançar os objetivos propostos nos projetos.
                          <br />
                          <strong>Trabalho em Equipe:</strong> A construção e programação de robôs frequentemente envolvem trabalho em equipe, o que estimula a colaboração e a comunicação entre os alunos.
                          <br />
                          <strong>Preparação para o Futuro:</strong> Com a crescente importância da tecnologia no mundo moderno, a Robótica Educacional prepara os estudantes para lidar com desafios tecnológicos e se tornarem profissionais mais capacitados e adaptáveis às demandas do mercado de trabalho.
                          <br />
                          <strong>Estímulo à Persistência:</strong> O processo de construir e programar robôs pode ser desafiador, mas ao enfrentarem esses desafios, os alunos desenvolvem a persistência e a capacidade de superar obstáculos.
                          <br />
                          <strong>Engajamento e Motivação:</strong> O aspecto lúdico e desafiador da Robótica Educacional motiva os alunos a se envolverem ativamente nas atividades, tornando o aprendizado mais atrativo e estimulante.
                          <br />
                          <strong>Fomento à Inovação:</strong> Ao explorar novas ideias e tecnologias, a Robótica Educacional incentiva a cultura da inovação e o pensamento fora da caixa.
                        </Text>
                        <br />
                        <Text>
                          Portanto, a Robótica Educacional é uma poderosa aliada da educação, proporcionando um ambiente de aprendizagem estimulante, interdisciplinar e criativo. Ao trabalhar com robôs de forma divertida e desafiadora, os alunos desenvolvem habilidades tecnológicas e cognitivas essenciais para o século XXI, preparando-se para enfrentar os desafios futuros de forma mais capacitada e confiante.
                        </Text>
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" size="md">
                        1.3 Introdução à inteligência artificial
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text align={'justify'}>
                        São muitos os conhecimentos que participam do conceito de
                        Inteligência Artificial (IA), não iremos aqui definir exatamente
                        o que é, mas conhecer e refletir sobre seus conceitos e tipos. Criar máquinas que possam agir, pensar e aprender como os seres humanos é um desejo antigo, quantos filmes, seriados e histórias você conhece com essa temática? Muitos, não!?
                      </Text>

                      <Heading marginTop={"10px"} size="md">Breve histórico da inteligencia artificial</Heading>
                      <Text align={'justify'} marginTop={"10px"}>
                        A concepção de construir uma máquina capaz de executar tarefas em benefício do ser humano é algo que vem sendo imaginado há muito tempo. Um marco significativo no desenvolvimento da IA ocorreu quando Warren McCulloch e Walter Pitts publicaram um artigo intitulado "A logical calculus of the ideas immanent in nervous activity" em 1943. Nesse artigo, eles apresentaram a primeira noção de neurônio artificial, um modelo computacional que fundamentava redes neurais usando matemática e algoritmos, especificamente a lógica de limiar (threshold logic). Esse modelo estabeleceu as bases para a investigação das redes neurais, que se desdobrou em duas abordagens: uma centrada nos processos biológicos do cérebro e outra voltada para a aplicação de redes neurais na inteligência artificial. Saiba mais: [artigo:<a href='https://medium.com/@augusto_Pinheiro/redes-neurais-artificiais-133de77c7240'> REDES NEURAIS ARTIFICIAIS]</a>
                      </Text>

                      <Text align={'justify'} marginTop={"10px"}>A inteligência artificial trata-se da capacidade dos computadores de simular e executar tarefas que normalmente exigem inteligência humana como aprendizado, resolução de problemas, tomada de decisões, reconhecimento de padrões, entre outros.
                        <br /> Entre as classificações da IA podemos citar as
                        <strong> IAs Discriminativas: </strong> São algoritmos de IA que se concentram em classificar ou tomar decisões com base em dados existentes. Eles identificam padrões e relacionam dados de entrada a categorias ou respostas pré-definidas.
                        <strong> IAs Generativas:</strong> São algoritmos de IA que têm a capacidade de criar novos dados, semelhantes aos dados de treinamento, gerando novas amostras com base nas distribuições de probabilidade dos dados originais. </Text>

                      <Text marginTop={"10px"}>Tipos de inteligência artificial: </Text>
                      <SimpleGrid
                        marginTop={"10px"}
                        spacing={4}
                        maxW={isMobile ? '100%' : '80%'}
                        templateColumns={isMobile ? 'none' : 'repeat(auto-fill, minmax(100%, 1fr))'}
                      >
                        <Card>
                          <CardHeader>
                            <Heading size="md">Inteligência Artificial Limita (ANI)</Heading>
                          </CardHeader>
                          <CardBody>
                            <Text align={"justify"}>
                              A Inteligência Artificial Limitada, também chamada de "IA fraca", tem como principal foco o armazenamento de grande quantidade de dados para a execução de tarefas complexas, mas sempre direcionadas ao objetivo para o qual foram programadas. Além disso, elas podem realizar cálculos complicados de maneira rápida, porém não vão além desse escopo. Dentro dessa categoria, destacam-se dois tipos: as máquinas reativas, com recursos mais limitados que reagem a estímulos configurados; e as com memória limitada, um avanço em relação às reativas, que armazenam informações para tomar decisões, como as recomendações em serviços de streaming. Por exemplo, a personalização dos conteúdos oferecidos na Netflix baseados nas escolhas anteriores do usuário é possível graças a esse tipo de IA.
                            </Text>
                          </CardBody>
                        </Card>
                        <Card>
                          <CardHeader>
                            <Heading size="md">Inteligência artificial geral (AGI)</Heading>
                          </CardHeader>
                          <CardBody>
                            <Text align={"justify"}>
                              Refere-se a um tipo de inteligência artificial que possui a capacidade de entender, aprender, aplicar conhecimentos e habilidades em uma ampla variedade de tarefas e domínios, de forma análoga à inteligência humana. Em contraste com a inteligência artificial estreita (IA estreita ou "IA fraca"), que é projetada para realizar tarefas específicas e limitadas, a AGI visa a generalização e adaptação a diferentes contextos de forma autônoma.

                              A AGI aspira à flexibilidade, abrangência e capacidade de aprender e aplicar princípios em novas situações sem precisar ser reprogramada. Isso implica a habilidade de transferir conhecimentos de um domínio para outro, aprendendo e se adaptando continuamente para enfrentar uma variedade de desafios complexos.
                            </Text>
                          </CardBody>
                        </Card>
                        <Card>
                          <CardHeader>
                            <Heading size="md" >Superinteligência (ASI)</Heading>
                          </CardHeader>
                          <CardBody>
                            <Text align={"justify"}>
                              Representa um nível avançado de inteligência artificial que ultrapassa significativamente a capacidade intelectual humana em todas as áreas. Essa forma avançada de IA teria a capacidade de resolver problemas complexos de maneira muito mais eficaz que os seres humanos, podendo se aprimorar continuamente, levantando considerações éticas e de segurança sobre seu desenvolvimento e controle para garantir benefícios e evitar riscos para a sociedade.
                            </Text>
                          </CardBody>
                        </Card>
                      </SimpleGrid>
                      <Text marginTop={"20px"} align={"justify"}>
                        Por fim, a Inteligência Artificial Geral (AGI) representa uma forma de inteligência artificial que busca replicar a amplitude e a generalização da inteligência humana em diversos domínios. A Inteligência Artificial Estreita (ANI) refere-se à IA especializada, projetada para realizar tarefas específicas sem essa generalização. Já a Superinteligência Artificial (ASI) é um conceito hipotético que vai além da capacidade humana em todas as áreas intelectuais, apresentando um potencial exponencial de autoaperfeiçoamento e levantando preocupações éticas e de segurança.
                      </Text>

                      <Text marginTop={"10px"} align={"justify"}>
                        <strong>Criar máquinas que possam agir, pensar e aprender como os seres humanos é um desejo antigo.</strong> Quantos filmes, seriados e histórias você conhece com essa temática? Muitos, não é verdade?
                      </Text>

                      <Text marginTop={"10px"} align={"justify"}>
                        A <em>Inteligência Artificial (IA)</em> está interligada a diversas áreas. Atualmente, encontra-se principalmente nos <em>sistemas especializados:</em> programas de computador que utilizam uma base de dados e um sistema de algoritmos para processar dados e gerar informações. As definições da IA classificadas abaixo representam ramificações ou caminhos de estudo³.
                      </Text>

                      <Text marginTop={"10px"} align={"justify"}>
                        <strong>Categorias de definição da IA:</strong>
                      </Text>

                      <Text>
                        <strong>(a) Sistemas que pensam como humanos</strong>
                      </Text>
                      <Text>
                        <strong>(b) Sistemas que agem como humanos</strong>
                      </Text>
                      <Text>
                        <strong>(c) Sistemas que pensam logicamente</strong>
                      </Text>
                      <Text>
                        <strong>(d) Sistemas que agem logicamente</strong>
                      </Text>

                      <Text marginTop={"10px"} align={"justify"}>
                        Curiosamente, o computador pode realizar muitos cálculos complicados em milissegundos, mas não consegue distinguir uma cadeira de metal de uma de madeira, algo que até uma criança de 3 anos consegue fazer¹. Para que um robô aprenda e compreenda as informações, sua programação e suas partes físicas devem ser capazes de interagir com a realidade. Para isso, a inteligência artificial utiliza conhecimentos de diversas áreas, como psicanálise, filosofia, psicologia, matemática, informática, medicina, entre outros. <strong>Não é uma tarefa fácil, mas estamos avançando e em breve poderemos descobrir máquinas com essa capacidade.</strong>
                      </Text>

                      <Text marginTop={"10px"} align={"justify"}>
                        Toda essa capacidade nos assusta, por isso, precisamos lidar com um nível ético de proteção à espécie humana. <em>Isaac Asimov</em>, inspirado nesse desafio, deixou seu legado na obra de 1950 intitulada "<strong>Eu, Robô</strong>", onde criou a lógica da proteção humana que deve ser aplicada na robótica e na inteligência artificial, resumida nas <strong>3 leis da robótica</strong>. São elas:
                      </Text>

                      <Card>
                        <CardHeader>
                          <Heading size="md"><strong>As Três Leis da Robótica de Isaac Asimov:</strong></Heading>
                        </CardHeader>

                        <CardBody>
                          <Stack divider={<StackDivider />} spacing="4">
                            <Box>
                              <Heading size="xs" textTransform="uppercase">
                                Primeira Lei:
                              </Heading>
                              <Text pt="2" fontSize="sm">
                                <strong>Um robô não pode ferir um ser humano ou, por inação, permitir que um ser humano sofra algum mal.</strong>
                              </Text>
                            </Box>
                            <Box>
                              <Heading size="xs" textTransform="uppercase">
                                Segunda Lei:
                              </Heading>
                              <Text pt="2" fontSize="sm">
                                <strong>Um robô deve obedecer às ordens dadas por seres humanos, exceto nos casos em que tais ordens entrem em conflito com a Primeira Lei.</strong>
                              </Text>
                            </Box>
                            <Box>
                              <Heading size="xs" textTransform="uppercase">
                                Terceira Lei:
                              </Heading>
                              <Text pt="2" fontSize="sm">
                                <strong>Um robô deve proteger sua própria existência, desde que tal proteção não entre em conflito com a Primeira ou a Segunda Lei.</strong>
                              </Text>
                            </Box>
                          </Stack>
                        </CardBody>
                      </Card>
                      <Text pt="2" fontSize="sm">
                        <strong>Parabéns, terminamos o primeiro módulo, vamos para nossa primeira atividade? </strong>
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

            </Accordion>

            <AcordeonLesson isMobile={isMobile} />
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
