import React from 'react';
import {
  Button,
  Collapse,
  SimpleGrid,
  Stack,
  StackDivider,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Container,
  Box,
  Heading,
  Text,
  Highlight,
} from '@chakra-ui/react';
import Header from '../components/Header';
import AcordeonLesson from '../components/AcordeonLesson';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import YoutubeCard from '../components/YoutubeCard';

const Modulo1 = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

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
              <Text>Módulo I</Text>
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
                Vamos falar sobre robótica?
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
                    <Heading size="sm">1. Robótica</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  <Text fontSize="lg" textAlign="justify">
                    <Text fontSize="lg" textAlign="justify">
                      <strong>Robótica</strong> é uma ciência que combina
                      mecânica, eletrônica e ciência da computação. Seus estudos
                      permitem construir máquinas programadas para realizar
                      tarefas, <strong>robôs</strong>. Existem vários tipos de
                      robôs, e sua classificação e aplicação dependem de seus
                      sensores, cadeia cinemática de movimento, autonomia, etc.
                      Várias são as áreas nas quais o robô pode desempenhar um
                      papel, seja na indústria, medicina, segurança, entre
                      outras.
                    </Text>
                    <br />
                    <Text fontSize="lg">
                      Para entendermos como o robô funciona, precisaremos
                      identificar suas partes físicas e lógicas. O{' '}
                      <strong>hardware</strong> (parte física) é feito de peças
                      como Arduino, sensores, motores, fios e todos os
                      componentes que podemos tocar, e o <strong>software</strong>{' '}
                      (parte lógica) um programa, um <strong>algoritmo</strong>{' '}
                      programado para executar sequências de comandos que vão
                      controlar o hardware.
                    </Text>
                    <br />
                    <Text fontSize="lg">
                      Imagine explorar um vasto universo de possibilidades! A
                      Robótica oferece diversos tipos de robôs, cada um com sua
                      classificação e aplicação específicas. Suas características,
                      como <strong>sensores avançados</strong>, a{' '}
                      <strong>cadeia cinemática de movimento</strong> e a{' '}
                      <strong>autonomia</strong>, definem sua atuação em áreas
                      tão diversas quanto indústria, medicina, segurança e muito
                      mais.
                    </Text>
                    <br />
                    <Text fontSize="lg">
                      Na indústria, os robôs assumem o protagonismo na automação
                      industrial. O célebre <strong>Braço Robótico Industrial</strong>{' '}
                      lidera o cenário, realizando tarefas repetitivas e precisas,
                      como montagem de peças, elevando a eficiência da produção a
                      um novo patamar.
                    </Text>
                    <br />
                    <Text fontSize="lg">
                      Já na medicina, um fascinante mundo de avanços é desbravado
                      com o <strong>Robô Cirúrgico</strong>. Em operações complexas,
                      ele se destaca como um aliado inestimável, permitindo
                      movimentos precisos e minimamente invasivos, trazendo
                      resultados promissores para a recuperação dos pacientes.
                    </Text>
                    <br />
                    <Text fontSize="lg">
                      Na busca por segurança, a presença dos robôs é inestimável.
                      Especializados em tarefas de alto risco e ambientes perigosos,
                      esses intrépidos protetores, como os dedicados à desativação
                      de bombas ou à inspeção de locais hostis, garantem a
                      preservação de vidas humanas.
                    </Text>
                    <br />
                    <Text fontSize="lg">
                      Agricultura e exploração espacial, também, não ficam de fora!{' '}
                      <strong>Robôs Agrícolas</strong> abrem caminho para a otimização
                      de cultivos e o aumento da produção de alimentos, enquanto{' '}
                      <strong>Sondas e Robôs Espaciais</strong> nos presenteiam com
                      dados e imagens surpreendentes de planetas e luas distantes.
                    </Text>
                    <br />
                    <Text fontSize="lg">
                      Para desvendar o funcionamento dessas maravilhas tecnológicas,
                      é crucial conhecer suas duas partes principais: o{' '}
                      <strong>hardware</strong> e o <strong>software</strong>. O
                      hardware, a parte física, é construído com peças fascinantes,
                      tais como Arduino, sensores, motores e fios, prontas para
                      criar uma coreografia de movimentos incríveis. E, por sua
                      vez, o software, a parte lógica, é a mente brilhante do robô,
                      um programa que controla com maestria cada ação do hardware,
                      possibilitado pelo ambiente de desenvolvimento de códigos de
                      computador, conhecido como <strong>IDE</strong>.
                    </Text>
                    <br />
                    <Text fontSize="lg" mb="20px">
                      O futuro está sendo moldado pela Robótica. Para quem ousa se
                      aventurar nesse mundo de criatividade e inovação, as
                      possibilidades são infindáveis. Desde a aplicação em setores
                      industriais, médicos e de segurança até a exploração dos
                      confins do espaço, a robótica nos leva a novos horizontes e
                      impulsiona a sociedade rumo a um futuro incrível, guiado por
                      máquinas inteligentes e habilidades humanas combinadas.
                    </Text>
                    <Text>
                      Aprenda um pouco mais sobre robótica no vídeo a seguir:
                    </Text>
                    <br />
                    <YoutubeCard
                      title={
                        'Robótica industrial: conceitos, termos, aplicações, vantagens e desvantagens.'
                      }
                      subTitle={
                        'Vídeo produzido pela Professora Giovana Tripoloni Tangerino como material de apoio a disciplina "Robótica" de cursos do Instituto Federal de São Paulo (IFSP) de Piracicaba (https://prc.ifsp.edu.br/).'
                      }
                      url={'https://www.youtube.com/embed/26lHD4NjxWY'}
                    ></YoutubeCard>
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
                        1.1 Robótica Industrial
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
                        O ramo denominado robótica industrial visa automatizar a
                        criação de produtos, como é o caso da montagem de
                        automóveis em grandes empresas como Chevrolet, Toyota e
                        Fiat. A maior parte da pintura, montagem, manutenção e
                        acabamento dos carros é feita por máquinas, pois um{' '}
                        <strong>robô bem programado</strong> repete seus movimentos
                        com precisão, sem interrupção e inúmeras vezes mais rápido
                        do que um humano.
                      </Text>{' '}
                      <br />
                      <Text>
                        Um robô pode realizar uma tarefa perigosa, portanto, evita
                        danos a uma pessoa, assim como os robôs usados para
                        desarmar bombas. A robótica é, portanto, uma{' '}
                        <strong>ciência essencial</strong> para a evolução
                        industrial e garante eficiência, segurança e agilidade nos
                        processos de produção.
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
                    A associação da robótica com a educação deu origem a robótica
                    educacional, ou ainda, robótica pedagógica; um ambiente
                    dinâmico que utiliza a robótica para o estudo de diversas
                    disciplinas, desenvolvimento de habilidades e tecnologias.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      1.3 Introdução à inteligência artificial
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    São muitos os conhecimentos que participam do conceito de
                    Inteligência Artificial (IA), não iremos aqui definir exatamente
                    o que é, mas conhecer e refletir a partir das seguintes
                    definições:

                    <SimpleGrid
                      spacing={4}
                      maxW={isMobile ? '100%' : '80%'}
                      templateColumns={isMobile ? 'none' : 'repeat(auto-fill, minmax(100%, 1fr))'}
                    >
                      <Card>
                        <CardHeader>
                          <Heading size="md">Rich, 1994</Heading>
                        </CardHeader>
                        <CardBody>
                          <Text>
                            “IA é o estudo de como fazer os computadores realizarem tarefas
                            as quais, até o momento, os homens fazem melhor”.
                          </Text>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardHeader>
                          <Heading size="md">Pereira, 1988</Heading>
                        </CardHeader>
                        <CardBody>
                          <Text>
                            "IA Inteligência Artificial é uma disciplina científica que utiliza
                            as capacidades de processamento de símbolos da computação com o fim
                            de encontrar métodos genéricos para automatizar atividades perceptivas,
                            cognitivas e manipulativas, por via do computador.”
                          </Text>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardHeader>
                          <Heading size="md">Russel, 2004</Heading>
                        </CardHeader>
                        <CardBody>
                          <Text>
                            "Durante milhares de anos, procuramos entender como pensamos, isto é,
                            como um mero punhado de matéria pode perceber, compreender, prever e
                            manipular um mundo muito maior e mais complicado que ela própria. O
                            campo da inteligência artificial, ou IA, vai ainda mais além: ele tenta
                            não apenas compreender, mas também construir entidades inteligentes."
                          </Text>
                        </CardBody>
                      </Card>
                    </SimpleGrid>

                    <Text>
                      Criar máquinas que possam agir, pensar e aprender como os seres humanos é
                      um desejo antigo, quantos filmes, seriados e histórias você conhece com
                      essa temática? Muitos, não!?
                    </Text>

                    <Text>
                      Muitas são as áreas que a IA está interligada, hoje, está presente
                      principalmente nos sistemas especializados; programas de computador que
                      utilizam uma base de dados e um sistema de algoritmos para processar dados
                      e gerar informações. As definições da IA classificadas abaixo, são ainda,
                      ramificações ou caminhos de estudo³.
                    </Text>

                    <Text>Categorias de definição da IA:</Text>

                    <Text>(a) Sistemas que pensam como humanos</Text>
                    <Text>(b) Sistemas que agem como humanos</Text>
                    <Text>(c) Sistemas que pensam logicamente</Text>
                    <Text>(d) Sistemas que agem logicamente</Text>

                    <Text>
                      Curiosamente, o computador pode realizar muitos cálculos complicados em
                      milissegundos, mas não consegue distinguir uma cadeira de metal de uma de
                      madeira, o que até uma criança de 3 anos faz. ¹ Para que um robô aprenda e
                      compreenda as informações, sua programação e suas partes físicas devem ser
                      capazes de interagir com a realidade, para isso a inteligência artificial
                      utiliza conhecimentos de diversas áreas, como psicanálise, filosofia,
                      psicologia, matemática, informática, medicina, entre outros. Não é uma
                      tarefa fácil, mas estamos avançando e em breve iremos descobrir máquinas com
                      essa capacidade.
                    </Text>

                    <Text>
                      Com isso em mente, Isaac Asimov em seu livro de 1950 "I Robot" criou a
                      lógica da proteção humana que deve ser aplicada na robótica e na
                      inteligência artificial, ou seja, as 3 leis da robótica. São elas:
                    </Text>

                    <Card>
                      <CardHeader>
                        <Heading size="md">São elas:</Heading>
                      </CardHeader>

                      <CardBody>
                        <Stack divider={<StackDivider />} spacing="4">
                          <Box>
                            <Heading size="xs" textTransform="uppercase">
                              Primeira Lei:
                            </Heading>
                            <Text pt="2" fontSize="sm">
                              Um robô não pode ferir um ser humano ou, por inação, permitir que um
                              ser humano sofra algum mal.
                            </Text>
                          </Box>
                          <Box>
                            <Heading size="xs" textTransform="uppercase">
                              Segunda Lei:
                            </Heading>
                            <Text pt="2" fontSize="sm">
                              Um robô deve obedecer às ordens dadas por seres humanos, exceto nos
                              casos em que tais ordens entrem em conflito com a Primeira Lei.
                            </Text>
                          </Box>
                          <Box>
                            <Heading size="xs" textTransform="uppercase">
                              Terceira Lei:
                            </Heading>
                            <Text pt="2" fontSize="sm">
                              Um robô deve proteger sua própria existência, desde que tal proteção não
                              entre em conflito com a Primeira ou a Segunda Lei.
                            </Text>
                          </Box>
                        </Stack>
                      </CardBody>
                    </Card>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <AcordeonLesson isMobile={isMobile} />
        </Container>
        <Footer isMobile={isMobile}></Footer>
      </Box>
    </>
  );
};

export default Modulo1;
