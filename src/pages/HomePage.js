import React from 'react'
import robocactus from '../assests/robocactus.png'
import project from '../assests/project.png'
import robs2 from '../assests/robocactus2.png'
import Header from '../components/Header'
import styled from 'styled-components'
import Cards from './Cards';
import { Flex, Spacer } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react';


const Container = styled.div`
  width: 100vw;
    padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    /* Estilos para dispositivos com largura máxima de 768px */
    padding: 10px; 
  }`;

const HompePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: true });

  return (
    <>
      <Header />
      <Container >
        <Cards
          title={'Módulo I - Vamos falar sobre robótica?'}
          text={'Neste módulo, daremos início aos nossos estudos de robótica. Abordaremos tópicos como a robótica industrial, presente em diversos setores da indústria, impulsionando a automação de processos e aumentando a eficiência produtiva. Também exploraremos a robótica educacional, desempenhando um papel importante no ensino e no desenvolvimento de habilidades. Além disso, mergulharemos na fascinante área da inteligência artificial, possibilitando aos robôs tomar decisões e interagir de forma inteligente com o ambiente. Por fim, teremos uma atividade relacionada ao módulo. Prepare-se para expandir seu conhecimento e explorar o mundo da robótica em suas diversas vertentes.'}
          img={robocactus}
          left={isMobile}
          buttonText={'Simbora'}
        >
        </Cards>
        <br />
        <Cards
          title={'Módulo II - E o Arduino, que tal?'}
          text={'Neste módulo, daremos início aos nossos estudos sobre o Arduino, uma plataforma versátil e poderosa. Veremos o hardware Arduino Uno, que é essencial para a robótica e automação de processos. Também exploraremos o software Arduino, uma ferramenta de programação que permite criar projetos incríveis. E, para consolidar o aprendizado, teremos uma atividade prática relacionada ao módulo. Prepare-se para expandir seu conhecimento e explorar o mundo da tecnologia por meio do Arduino.'}
          img={'https://upload.wikimedia.org/wikipedia/commons/7/71/Arduino-uno-perspective-transparent.png'}
          left={isMobile}
          buttonText={'#Partiu'}>
            
        </Cards>
        <br />
        <Cards
          title={'Módulo III - A lógica das máquinas'}
          text={'Para esse módulo, vamos explorar tópicos essenciais para o aprendizado do Arduino. Abordaremos a lógica de programação e a linguagem utilizada para programar essa plataforma versátil. Você terá a oportunidade de programar e testar sua própria placa Arduino, além de aprender a criar uma régua eletrônica utilizando o sensor HC-SR04. Ao longo do módulo, vamos desvendar os segredos por trás da conexão do sensor ao Arduino e codificar nosso projeto. E, é claro, não podemos esquecer da atividade prática que permitirá aplicar os conhecimentos adquiridos. Prepare-se para mergulhar na emocionante jornada da programação com Arduino.'}
          img={project}
          left={isMobile}
          buttonText={'Bora'}>
        </Cards>
        <br />
        <Cards
          title={'Módulo IV- projetando o futuro'}
          text={'Chegou a hora de explorar o fascinante universo do kit robótico. Seremos apresentados aos componentes que o compõem e aprenderemos a utilizá-los para criar projetos interessantes. Abordaremos a protoboard, uma placa de montagem essencial, além de explorar os LEDs, resistores e suas aplicações. Um destaque deste módulo será a criação de um sistema de alerta, em que entenderemos o esquema elétrico e aprenderemos a programá-lo. Também teremos uma atividade prática para consolidar o aprendizado e um desafio empolgante para os mais audaciosos. Prepare-se para desvendar os segredos do kit robótico e dar vida às suas ideias!'}
          img={robs2}
          left={isMobile}
          buttonText={'oxe, simbora!'}>
            
        </Cards>
      </Container>
    </>
  )
}
export default HompePage