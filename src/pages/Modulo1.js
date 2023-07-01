import React from 'react';
import { Avatar, Badge, Button, Collapse, Flex, SimpleGrid, SkeletonCircle, SkeletonText, Stack, StackDivider, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import { Highlight } from '@chakra-ui/react';
import  AcordeonLesson from '../components/AcordeonLesson'
import Footer from '../components/Footer';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


const Modulo1 = () => {

    const { isOpen, onToggle } = useDisclosure()
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <Header />


            <Box
                width="100vw"
                paddingTop="10px"
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
            >
                <Container gap={10} maxW={isMobile ? '100%' : '80%'} >
                    <Box w="100%" textAlign="justify" maxW="100%">
                        <Heading lineHeight={['tall', 'tall', 'base']}
                            fontSize={['4xl', '4xl', '5xl']}>
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
                {/* <Flex>
                    <Avatar src='https://bit.ly/sage-adebayo' />
                    <Box ml='3'>
                        <Text fontWeight='bold'>
                            Segun Adebayo
                            <Badge ml='1' colorScheme='green'>
                                New
                            </Badge>
                        </Text>
                        <Text fontSize='sm'>UI Engineer</Text>
                    </Box>
                </Flex> */}


                <Container display="flex" flexDirection="column" gap={5} maxW={isMobile ? '100%' : '80%'}>

                    <Accordion allowMultiple >
                        <AccordionItem >
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Heading size='sm'> Atividade </Heading>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Stack direction='row'>
                                    <Badge>Default</Badge>
                                    <Badge colorScheme='green'>Success</Badge>
                                    <Badge colorScheme='red'>Removed</Badge>
                                    <Badge colorScheme='purple'>New</Badge>
                                </Stack>
                                <Highlight textAlign="justify" query={
                                    ['ciência da computação', 'mecânica', 'eletrônica', 'cadeia cinemática', 'sensores', 'autonomia', 'indústria', 'medicina', 'segurança', 'hardware', 'software']}
                                    styles={{
                                        px: ['1', '2', '3'],
                                        py: ['0.5', '1', '1.5'],
                                        rounded: 'full',
                                        bg: 'teal.100',
                                        fontSize: ['md',],
                                        lineHeight: ['base', 'tall', 'tall'],
                                    }}>
                                    Robótica é uma ciência que combina mecânica, eletrônica e ciência da computação. Seus estudos permitem construir máquinas programadas para realizar tarefas, robôs. Existem vários tipos de robôs, e sua classificação e aplicação dependem de seus sensores, cadeia cinemática de movimento, autonomia, etc. Várias são as áreas nas quais o robô pode desempenhar um papel, seja na indústria, medicina, segurança, entre outras.

                                    Para entendermos como o robô funciona, precisaremos identificar suas partes físicas e lógicas.  O hardware  (parte física) é feito de peças como Arduino, sensores, motores, fios e todos os componentes que podemos tocar, e o software (parte lógica) é um programa, um ambiente de desenvolvimento de códigos de computador (IDE) que vai controlar o hardware.
                                </Highlight>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                1.1 Robótica Industrial
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        O ramo denominado robótica industrial visa automatizar a criação de produtos, como é o caso da montagem de automóveis em grandes empresas como Chevrolet, Toyota e Fiat. A maior parte da pintura, montagem, manutenção e acabamento dos carros é feita por máquinas, pois um robô bem programado repete seus movimentos com precisão, sem interrupção e inúmeras vezes mais rápido do que um humano. Um robô pode realizar uma tarefa perigosa, portanto, evita danos a uma pessoa, assim como os robôs usados para desarmar bombas. A robótica é, portanto, uma ciência essencial para a evolução industrial e garante eficiência, segurança e agilidade nos processos de produção.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                1.2 Robótica Educacional
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        A associação da robótica com a educação deu origem a robótica educacional, ou ainda, robótica pedagógica; um ambiente dinâmico que utiliza a robótica para o estudo de diversas disciplinas, desenvolvimento de habilidades e tecnologias.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>

                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>

                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>

                                            1.3 Introdução à inteligência artificial
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize='12px' />
                                        ) : (
                                            <AddIcon fontSize='12px' />
                                        )}
                                    </AccordionButton>

                                    <AccordionPanel pb={4}>
                                        São muitos os conhecimentos que participam do conceito de Inteligência Artificial (IA), não iremos aqui definir exatamente o que é, mas conhecer e refletir a partir das seguintes definições:

                                        <SimpleGrid
                                            spacing={4} maxW={isMobile ? '100%' : '80%'}
                                            templateColumns={isMobile ? 'none' : 'repeat(auto-fill, minmax(100%, 1fr))'}>
                                            <Card>
                                                <CardHeader>
                                                    <Heading size='md'>Rich, 1994</Heading>
                                                </CardHeader>
                                                <CardBody>
                                                    <Text>“IA é o estudo de como fazer os computadores realizarem tarefas as quais, até o momento, os homens fazem melhor”.</Text>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                                <CardHeader>
                                                    <Heading size='md'>Pereira, 1988</Heading>
                                                </CardHeader>
                                                <CardBody>
                                                    <Text>"IA Inteligência Artificial é uma disciplina científica que utiliza as capacidades de processamento de símbolos da computação com o fim de encontrar métodos genéricos para automatizar atividades perceptivas, cognitivas e manipulativas, por via do computador.”</Text>
                                                </CardBody>
                                            </Card>
                                            <Card>
                                                <CardHeader>
                                                    <Heading size='md'>Russel, 2004</Heading>
                                                </CardHeader>
                                                <CardBody>
                                                    <Text>"Durante milhares de anos, procuramos entender como pensamos, isto é, como um mero punhado de matéria pode perceber, compreender, prever e manipular um mundo muito maior e mais complicado que ela própria. O campo da inteligência artificial, ou IA, vai ainda mais além: ele tenta não apenas compreender, mas também construir entidades inteligentes."</Text>
                                                </CardBody>
                                            </Card>
                                        </SimpleGrid>

                                        <Text>
                                            Criar máquinas que possam agir, pensar e aprender como os seres humanos é um desejo antigo, quantos filmes, seriados e histórias você conhece com essa temática? Muitos, não!?
                                        </Text>

                                        <Text>
                                            Muitas são as áreas que a IA está interligada, hoje, está presente principalmente nos sistemas especializados; programas de computador que utilizam uma base de dados e um sistema de algoritmos para processar dados e gerar informações. As definições da IA classificadas abaixo, são ainda, ramificações ou caminhos de estudo³.
                                        </Text>

                                        <Text>
                                            Categorias de definição da IA:
                                        </Text>

                                        <Text>
                                            (a) Sistemas que pensam como humanos
                                        </Text>
                                        <Text>
                                            (b) Sistemas que agem como humanos
                                        </Text>
                                        <Text>
                                            (c) Sistemas que pensam logicamente
                                        </Text>
                                        <Text>
                                            (d) Sistemas que agem logicamente
                                        </Text>

                                        <Text>
                                            Curiosamente, o computador pode realizar muitos cálculos complicados em milissegundos, mas não consegue distinguir uma cadeira de metal de uma de madeira, o que até uma criança de 3 anos faz. ¹ Para que um robô aprenda e compreenda as informações, sua programação e suas partes físicas devem ser capazes de interagir com a realidade, para isso a inteligência artificial utiliza conhecimentos de diversas áreas, como psicanálise, filosofia, psicologia, matemática, informática, medicina, entre outros. Não é uma tarefa fácil, mas estamos avançando e em breve iremos descobrir máquinas com essa capacidade.

                                            Com isso em mente, Isaac Asimov em seu livro de 1950 "I Robot" criou a lógica da proteção humana que deve ser aplicada na robótica e na inteligência artificial, ou seja, as 3 leis da robótica. São elas:
                                            <br />

                                            <Card>
                                                <CardHeader>
                                                    <Heading size='md'>São elas:</Heading>
                                                </CardHeader>

                                                <CardBody>
                                                    <Stack divider={<StackDivider />} spacing='4'>
                                                        <Box>
                                                            <Heading size='xs' textTransform='uppercase'>
                                                                Primeira Lei:
                                                            </Heading>
                                                            <Text pt='2' fontSize='sm'>
                                                                Um robô não pode ferir um ser humano ou, por inação, permitir que um ser humano sofra algum mal.
                                                            </Text>
                                                        </Box>
                                                        <Box>
                                                            <Heading size='xs' textTransform='uppercase'>
                                                                Segunda Lei:
                                                            </Heading>
                                                            <Text pt='2' fontSize='sm'>
                                                                Um robô deve obedecer às ordens dadas por seres humanos, exceto nos casos em que tais ordens entrem em conflito com a Primeira Lei.
                                                            </Text>
                                                        </Box>
                                                        <Box>
                                                            <Heading size='xs' textTransform='uppercase'>
                                                                Terceira Lei:
                                                            </Heading>
                                                            <Text pt='2' fontSize='sm'>
                                                                Um robô deve proteger sua própria existência, desde que tal proteção não entre em conflito com a Primeira ou a Segunda Lei.
                                                            </Text>
                                                        </Box>
                                                    </Stack>
                                                </CardBody>
                                            </Card>


                                            <Button onClick={onToggle}> São elas:</Button>
                                            <Collapse in={isOpen} animateOpacity>
                                                <Box
                                                    p='40px'
                                                    color='white'
                                                    mt='4'
                                                    bg='teal.500'
                                                    rounded='md'
                                                    shadow='md'
                                                >
                                                    <Text>Primeira Lei: Um robô não pode ferir um ser humano ou, por inação, permitir que um ser humano sofra algum mal.</Text>
                                                    <Text>
                                                        Segunda Lei: Um robô deve obedecer às ordens dadas por seres humanos, exceto nos casos em que tais ordens entrem em conflito com a Primeira Lei.
                                                    </Text>
                                                    <Text>
                                                        Terceira Lei: Um robô deve proteger sua própria existência, desde que tal proteção não entre em conflito com a Primeira ou a Segunda Lei.
                                                    </Text>
                                                </Box>

                                            </Collapse>

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
                                            <Box as="span" flex='1' textAlign='left'>
                                                1.2 Robótica Educacional
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='12px' />
                                            ) : (
                                                <AddIcon fontSize='12px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        A associação da robótica com a educação deu origem a robótica educacional, ou ainda, robótica pedagógica; um ambiente dinâmico que utiliza a robótica para o estudo de diversas disciplinas, desenvolvimento de habilidades e tecnologias.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>

                    <AcordeonLesson isMobile={isMobile}/>
                </Container>
                <Footer isMobile={isMobile}></Footer>
            </Box>
        </>
    );
};
export default Modulo1