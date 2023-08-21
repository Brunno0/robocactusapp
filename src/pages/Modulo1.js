import React from 'react';
import {
   SimpleGrid,
  Stack,
  StackDivider,
  useBreakpointValue,
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
import TableComponents from '../components/TableComponets';
import ABB from '../assests/ABB_IRB_6700_0002.png'
import KUKA from '../assests/KR 6 R900.png'
const Modulo1 = () => {
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
        
        <Text Text fontSize="lg" textAlign="justify"><br/>
            <Text><strong>Alguns tipos de robôs industriais</strong></Text>
            <br/>
            

                      <Text>
                        <strong>Robôs Manipuladores:</strong> São robôs com braços articulados compostos por várias juntas (geralmente seis) que lhes permitem movimentar-se em diferentes direções. Eles são amplamente utilizados em tarefas como soldagem, pintura, montagem e manipulação de materiais.

                        <TableComponents
                          titleOne={"ABB IRB 6700"}
                          img={ABB}

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
        
<br/>
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
                    <Text fontSize="lg" textAlign="justify">
                      <Text>A Robótica Educacional é uma área interdisciplinar que combina diversos campos do conhecimento, como lógica matemática, mecânica, eletrônica, programação e inteligência artificial.</Text>
                      <Text>Ela consiste em utilizar a robótica como uma ferramenta pedagógica para integrar os processos de aprendizagem com a prática da construção e programação de robôs. Essa abordagem estimula o pensamento computacional e promove a aprendizagem de forma lúdica e divertida.</Text>
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
                   <Text align={'justify'}> São muitos os conhecimentos que participam do conceito de
                    Inteligência Artificial (IA), não iremos aqui definir exatamente
                    o que é, mas conhecer e refletir sobre seus conceitos e tipos. Criar máquinas que possam agir, pensar e aprender como os seres humanos é um desejo antigo, quantos filmes, seriados e histórias você conhece com essa temática? Muitos, não!?
                    </Text>

         
                  <Heading  marginTop={"10px"} size="md">Breve histórico da inteligencia artificial</Heading>
                   <Text align={'justify'} marginTop={"10px"}> 
                    A concepção de construir uma máquina capaz de executar tarefas em benefício do ser humano é algo que vem sendo imaginado há muito tempo. Um marco significativo no desenvolvimento da IA ocorreu quando Warren McCulloch e Walter Pitts publicaram um artigo intitulado "A logical calculus of the ideas immanent in nervous activity" em 1943. Nesse artigo, eles apresentaram a primeira noção de neurônio artificial, um modelo computacional que fundamentava redes neurais usando matemática e algoritmos, especificamente a lógica de limiar (threshold logic). Esse modelo estabeleceu as bases para a investigação das redes neurais, que se desdobrou em duas abordagens: uma centrada nos processos biológicos do cérebro e outra voltada para a aplicação de redes neurais na inteligência artificial. Saiba mais: [artigo:<a href='https://medium.com/@augusto_Pinheiro/redes-neurais-artificiais-133de77c7240'> REDES NEURAIS ARTIFICIAIS]</a>
                    </Text>

              
                  <Text align={'justify'} marginTop={"10px"}>A inteligência artificial trata-se da capacidade dos computadores de simular e executar tarefas que normalmente exigem inteligência humana como aprendizado, resolução de problemas, tomada de decisões, reconhecimento de padrões, entre outros.
                  <br/> Entre as classificações da IA podemos citar as 
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
                          <Heading size="md">Superinteligência (ASI)</Heading>
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
