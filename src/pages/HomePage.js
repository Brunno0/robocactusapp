import React from 'react';
import styled from 'styled-components';
import { useBreakpointValue } from '@chakra-ui/react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Cards from './Cards';
import { Highlight } from '@chakra-ui/react';
import robocactus from '../assests/robocactus.png';
import project from '../assests/project.png';
import robs2 from '../assests/robocactus2.png';

const ContainerAlign = styled.div`
  width: 100vw;
  padding-top: 10px;
  align-items: center;
  justify-content: center;
`;

const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Header />

      <ContainerAlign>
        <Container
          gap={10}
          maxW={isMobile ? '100%' : '70%'}
          display="flex"
          flexDirection="column"
        >
          <Box w="100%" textAlign="justify" maxW="100%" display="flex" flexDirection="column">
            <Heading lineHeight={['tall', 'tall', 'base']}>
              <Text fontSize={['4xl', '4xl', '5xl']}>Saudações!</Text>
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
            </Heading>

            <Text fontSize="1xl" >
              Utilizaremos o Arduino como ferramenta para aprender sobre esses temas. Ao longo da jornada, abordaremos os
              princípios da robótica, programação de robôs, montagem, conexões elétricas, sensores, entre outros. O
              objetivo é construir nosso primeiro projeto robótico juntos. O Robôcactus é um projeto criado no sertão
              brasileiro com o propósito de levar a robótica educacional às escolas de todo o país. Ele será nosso
              companheiro de equipe. Divirtam-se!
            </Text>
            <br/>

            {/* <Heading lineHeight="tall">
              <Text fontSize="3xl">Jornada:</Text>
            </Heading> */}
          </Box>
        </Container>

        <Container display="flex" flexDirection="column" gap={5} maxW={isMobile ? '100%' : '70%'}>
          <Cards
            title="Módulo I - Vamos falar sobre robótica?"
            text="Neste módulo, daremos início aos nossos estudos de robótica. Abordaremos tópicos como a robótica industrial, presente em diversos setores da indústria, impulsionando a automação de processos e aumentando a eficiência produtiva. Também exploraremos a robótica educacional, desempenhando um papel importante no ensino e no desenvolvimento de habilidades. Além disso, mergulharemos na fascinante área da inteligência artificial, possibilitando aos robôs tomar decisões e interagir de forma inteligente com o ambiente. Por fim, teremos uma atividade relacionada ao módulo. Prepare-se para expandir seu conhecimento e explorar o mundo da robótica em suas diversas vertentes."
            img={robocactus}
            left={isMobile}
            buttonText="Simbora"
          />

          <Cards
            title="Módulo II - E o Arduino, que tal?"
            text="Neste módulo, daremos início aos nossos estudos sobre o Arduino, uma plataforma versátil e poderosa. Veremos o hardware Arduino Uno, que é essencial para a robótica e automação de processos. Também exploraremos o software Arduino, uma ferramenta de programação que permite criar projetos incríveis. E, para consolidar o aprendizado, teremos uma atividade prática relacionada ao módulo. Prepare-se para expandir seu conhecimento e explorar o mundo da tecnologia por meio do Arduino."
            img="https://upload.wikimedia.org/wikipedia/commons/7/71/Arduino-uno-perspective-transparent.png"
            left={!isMobile}
            buttonText="#Partiu"
          />

          <Cards
            title="Módulo III - A lógica das máquinas"
            text="Para esse módulo, vamos explorar tópicos essenciais para o aprendizado do Arduino. Abordaremos a lógica de programação e a linguagem utilizada para programar essa plataforma versátil. Você terá a oportunidade de programar e testar sua própria placa Arduino, além de aprender a criar uma régua eletrônica utilizando o sensor HC-SR04. Ao longo do módulo, vamos desvendar os segredos por trás da conexão do sensor ao Arduino e codificar nosso projeto. E, é claro, não podemos esquecer da atividade prática que permitirá aplicar os conhecimentos adquiridos. Prepare-se para mergulhar na emocionante jornada da programação com Arduino."
            img={project}
            left={isMobile}
            buttonText="Bora"
          />

          <Cards
            title="Módulo IV - Projetando o futuro"
            text="Chegou a hora de explorar o fascinante universo do kit robótico. Seremos apresentados aos componentes que o compõem e aprenderemos a utilizá-los para criar projetos interessantes. Abordaremos a protoboard, uma placa de montagem essencial, além de explorar os LEDs, resistores e suas aplicações. Um destaque deste módulo será a criação de um sistema de alerta, em que entenderemos o esquema elétrico e aprenderemos a programá-lo. Também teremos uma atividade prática para consolidar o aprendizado e um desafio empolgante para os mais audaciosos. Prepare-se para desvendar os segredos do kit robótico e dar vida às suas ideias!"
            img={robs2}
            left={!isMobile}
            buttonText="Oxe, simbora!"
          />
        </Container>
      </ContainerAlign>
    </>
  );
};

export default HomePage;
