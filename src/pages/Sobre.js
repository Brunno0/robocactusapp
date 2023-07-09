import React from 'react';
import { Flex, Image, Stack, StackDivider, useBreakpointValue } from '@chakra-ui/react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import { Highlight } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import robocactusv1 from '../assests/ROBOCACTUS_V1.png';
import robs2 from '../assests/robocactus2.png';
import robToRight from '../assests/robo-.png';
import Footer from '../components/Footer';


const Sobre = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <Header />

            <Box
               
                paddingTop="10px"
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
            >
                <Container
                    gap={10}
                    maxW={isMobile ? '100%' : '80%'}
                    display="flex"

                >
                    <Box w="100%" textAlign="justify" maxW="100%">
                        {/* <Heading lineHeight={['tall', 'tall', 'base']} fontSize={['4xl', '4xl', '5xl']}>
                            Saudações!
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
                        </Heading> */}

                        <Card>
                            <CardHeader>
                                <Heading size="md">A história do Robôcactus</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing="4">
                                    <Box>
                                        <Heading size="xs" textTransform="uppercase">
                                            O início da jornada
                                        </Heading>
                                        <Text pt="2" fontSize="sm">
                                            Essa história começa durante o mestrado em Educação Profissional e Tecnológica do aluno Bruno
                                            Amorim Ramos, professor de informática e robótica na época (2020). Com o objetivo de desenvolver um
                                            material didático que auxiliasse professores e promovesse a autonomia dos alunos, surgiu o projeto de
                                            dissertação e produto educacional intitulado "Robôcactus: uma proposta para a prática de lógica de
                                            programação por meio da Robótica Educacional e da plataforma Arduino na Educação Profissional e
                                            Tecnológica". O projeto foi orientado pelo Dr. Eduardo Cardoso Moraes e está disponível no seguinte
                                            link:
                                            <a href="https://www2.ifal.edu.br/profept/dissertacoes/2021" style={{ color: 'blue' }}>
                                                {' '}
                                                clique aqui para dissertação site IFAL
                                            </a>
                                            <Text pt="2" fontSize="sm">
                                                Para este projeto, foi desenvolvido um produto educacional chamado Robôcactus. Além disso, foi
                                                elaborado um artigo científico que descreve os passos seguidos, incluindo o embasamento teórico, a
                                                metodologia de aplicação do produto educacional e os resultados obtidos na primeira implementação
                                                realizada em uma escola de ensino técnico em informática no estado da Bahia, especificamente no
                                                amado CETEPI. Com base nos dados coletados, foi possível criar uma segunda versão aprimorada do
                                                produto. Nesta terceira etapa, o foco é tornar o Robôcactus mais acessível e digital por meio do
                                                desenvolvimento do aplicativo chamado Robôcactus App. Esse aplicativo tem como objetivo auxiliar o
                                                ensino de lógica de programação utilizando a robótica educacional, juntamente com um ambiente de
                                                estudos gamificado.
                                            </Text>
                                            <Tabs>
                                                <TabList>
                                                    <Tab>Versão I</Tab>
                                                    <Tab>Versão II</Tab>
                                                    <Tab>Versão III</Tab>
                                                </TabList>

                                                <TabPanels>
                                                    <TabPanel>
                                                        <Box>
                                                            <Flex mb={4} flexDirection={isMobile ? 'column' : 'row'}>
                                                                <Box flex="0 0 30%" mr={isMobile ? 0 : 4}>
                                                                    <Image src={robocactusv1} alt="primeira versão robôcactus" w={isMobile ? '100%' : '80%'} />
                                                                </Box>
                                                                <Box flex="1">
                                                                    <Box>
                                                                        <Text pt="2" fontSize="sm">
                                                                            <Heading size="xs" textTransform="uppercase">
                                                                                Primeira Versão
                                                                            </Heading>
                                                                        </Text>
                                                                    </Box>
                                                                    <Text fontSize="sm">
                                                                        Neste artigo, apresentamos o uso do produto educacional{' '}
                                                                        <Text as="span" color="blue.500">
                                                                            Robôcactus
                                                                        </Text>
                                                                        , desenvolvido como resultado de uma dissertação de mestrado, como uma ferramenta teórico-metodológica associada à robótica educacional e à plataforma Arduino na Educação
                                                                        Profissional e Tecnológica (EPT). Para alcançar esse objetivo, adotamos a metodologia da pesquisa-ação participante, aliada às metodologias ativas de Sala de Aula Invertida (SAI)
                                                                        e Aprendizagem Baseada em Projetos (PBL).
                                                                        <Text as="span" fontWeight="bold">
                                                                            {' '}
                                                                            O foco principal do estudo foi abordar as dificuldades e a falta de motivação dos estudantes no componente de lógica de programação.
                                                                        </Text>{' '}
                                                                        Diante desse desafio, foi criada uma metodologia que visa mitigar esses impactos por meio da realização de oficinas de robótica educacional. Essas oficinas têm como objetivo
                                                                        principal
                                                                        <Text as="span" fontWeight="bold">
                                                                            {' '}
                                                                            contribuir para o desenvolvimento do pensamento crítico e do conhecimento técnico dos alunos, por meio da prática e da reflexão, fatores essenciais para a formação do
                                                                            profissional do século XXI.
                                                                        </Text>
                                                                    </Text>
                                                                </Box>
                                                            </Flex>
                                                        </Box>
                                                    </TabPanel>

                                                    <TabPanel>
                                                        <Box>
                                                            <Flex mb={4} flexDirection={isMobile ? 'column' : 'row'}>
                                                                <Box flex="0 0 30%" mr={isMobile ? 0 : 4}>
                                                                    <Image src={robs2} alt="segunda versão robôcactus" w={isMobile ? '100%' : '70%'} />
                                                                </Box>
                                                                <Box flex="1">
                                                                    <Box>
                                                                        <Text pt="2" fontSize="sm">
                                                                            <Heading size="xs" textTransform="uppercase">
                                                                                Segunda Versão
                                                                            </Heading>
                                                                        </Text>
                                                                    </Box>
                                                                    <Text fontSize="sm">
                                                                        A segunda versão do Robôcactus trouxe melhorias significativas em relação à primeira
                                                                        versão. Com base nos resultados e nas observações da primeira implementação, foram
                                                                        realizadas alterações no design e na estrutura do produto. Além disso, foram adicionadas
                                                                        novas funcionalidades e recursos para tornar a experiência do usuário mais completa e
                                                                        enriquecedora.
                                                                        <Text as="span" fontWeight="bold">
                                                                            {' '}
                                                                            Nesta versão, foram incorporados elementos visuais, diagramação, vídeos e desafios, que visam
                                                                            estimular o engajamento e a motivação dos alunos na aprendizagem de lógica de
                                                                            programação e robótica.
                                                                        </Text>{' '}
                                                                        A apostila foi modificada a partir da experiência da sua primeira versão e está disponível no link: 
                                                                        <Text as="span" color="blue.500">                                                                  
                                                                            <a href='https://educapes.capes.gov.br/handle/capes/601278'> segunda versão robôcactus</a>.      </Text>
                                                                    </Text>
                                                                </Box>
                                                            </Flex>
                                                        </Box>
                                                    </TabPanel>

                                                    <TabPanel>
                                                        <Box>
                                                            <Flex mb={4} flexDirection={isMobile ? 'column' : 'row'}>
                                                                <Box flex="0 0 30%" mr={isMobile ? 0 : 4}>
                                                                    <Image src={robToRight} alt="terceira versão robôcactus" w={isMobile ? '100%' : '70%'} />
                                                                </Box>
                                                                <Box flex="1">
                                                                    <Box>
                                                                        <Text pt="2" fontSize="sm">
                                                                            <Heading size="xs" textTransform="uppercase">
                                                                                Terceira Versão
                                                                            </Heading>
                                                                        </Text>
                                                                    </Box>
                                                                    <Text fontSize="sm">
                                                                        A terceira versão do Robôcactus está em desenvolvimento e terá como principal objetivo a
                                                                        criação de um aplicativo chamado Robôcactus App. Este aplicativo será voltado para o
                                                                        ensino de lógica de programação utilizando a robótica educacional. A ideia é que o
                                                                        aplicativo seja uma ferramenta complementar ao produto físico Robôcactus, permitindo que
                                                                        os estudantes pratiquem os conceitos de lógica de programação em um ambiente virtual.
                                                                        O Robôcactus App terá uma interface intuitiva e amigável, que facilitará a interação dos
                                                                        usuários com os desafios propostos. Além disso, o aplicativo contará com recursos
                                                                        gamificados, como conquistas e rankings, que estimularão o engajamento e a motivação dos
                                                                        estudantes. Estamos ansiosos para compartilhar mais informações sobre essa versão do
                                                                        Robôcactus em breve!
                                                                    </Text>
                                                                </Box>
                                                            </Flex>
                                                        </Box>
                                                    </TabPanel>
                                                </TabPanels>

                                            </Tabs>
                                        </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                
                            </CardFooter>
                        </Card>
                    </Box>
                    
                </Container>
                <Footer isMobile={isMobile}></Footer>
            </Box>
        </>
    );
};

export default Sobre;
