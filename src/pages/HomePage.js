import { 
  useBreakpointValue, 
  Spinner, 
  Container, 
  Box, 
  Heading, 
  Text 
} from '@chakra-ui/react';

import Header from '../components/Header';
import Cards from '../components/Cards';
import { Highlight } from '@chakra-ui/react';
import robocactus from '../assets/robocactus.png';
import project from '../assets/project.png';
import robs2 from '../assets/robocactus2.png';
import Footer from '../components/Footer';
import { goToMod1, goToMod2, goToMod3 } from '../routes/cordinator';
import useLoading from '../hooks/useLoading';

const HomePage = () => {

  const isMobile = useBreakpointValue({ base: true, md: false });
  const loading = useLoading();

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
  ) : (<>

        <Container gap={10} maxW={isMobile ? '100%' : '80%'} >
          <Box w="100%" textAlign="justify" maxW="100%">
            <Heading lineHeight={['tall', 'tall', 'base']}
              fontSize={['4xl', '4xl', '5xl']}>
              <Text>Saudações!</Text>
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
          </Box>
        </Container>

        <Container display="flex" flexDirection="column" gap={5} maxW={isMobile ? '100%' : '80%'}>
          <Cards
            title="Módulo I - Vamos falar sobre robótica?"
            text=
            {`Neste módulo, começamos a explorar a robótica, incluindo sua aplicação na indústria e educação. Abordamos também a inteligência artificial e como os robôs interagem de maneira inteligente com o ambiente. O módulo conclui com uma atividade prática relacionada a esses temas.`}
            img={robocactus}
            left={isMobile}
            buttonText="Simbora"
            buttonCordinator={goToMod1}

          />

          <Cards
            title="Módulo II - E o Arduino, que tal?"
            text="Neste módulo, daremos início aos nossos estudos sobre o Arduino, uma plataforma versátil e poderosa. Veremos o hardware e o software do Arduino UNO, uma . E, para consolidar o aprendizado, teremos uma atividade prática relacionada ao módulo. "
            img="https://upload.wikimedia.org/wikipedia/commons/7/71/Arduino-uno-perspective-transparent.png"
            left={isMobile}
            buttonText="#Partiu"
            buttonCordinator={goToMod2}
          />

          <Cards
            title="Módulo III - A lógica das máquinas"
            text="Para esse módulo, vamos explorar tópicos essenciais para o aprendizado do Arduino. Abordaremos a lógica de programação e a linguagem utilizada para programar essa plataforma versátil. Você terá a oportunidade de programar e testar sua própria placa Arduino, além de aprender a criar uma régua eletrônica utilizando o sensor HC-SR04. Ao longo do módulo, vamos desvendar os segredos por trás da conexão do sensor ao Arduino e codificar nosso projeto. E, é claro, não podemos esquecer da atividade prática que permitirá aplicar os conhecimentos adquiridos."
            img={project}
            left={isMobile}
            buttonText="Bora"
            buttonCordinator={goToMod3}
          />

          <Cards
            title="Módulo IV - Projetando o futuro"
            text="Chegou a hora de explorar o fascinante universo do kit robótico. Seremos apresentados aos componentes que o compõem e aprenderemos a utilizá-los para criar projetos interessantes. Abordaremos a protoboard, uma placa de montagem essencial, além de explorar os LEDs, resistores e suas aplicações. Um destaque deste módulo será a criação de um sistema de alerta, em que entenderemos o esquema elétrico e aprenderemos a programá-lo. Também teremos uma atividade prática para consolidar o aprendizado e um desafio empolgante para os mais audaciosos. Prepare-se para desvendar os segredos do kit robótico e dar vida às suas ideias!"
            img={robs2}
            left={isMobile}
            buttonText="Oxe, simbora!"
          />
        </Container>
       </> )}
       {loading ? null : (
        <Footer />
      )}
      </Box>
    </>
  );
};

export default HomePage;
