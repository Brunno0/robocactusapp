import { useForm } from '../hooks/useForm';
//import { useNavigate } from 'react-router-dom';
import { Box, Heading, Stack, StackDivider, Text, useBreakpointValue } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Textarea,
} from '@chakra-ui/react';
import YoutubeCard from './YoutubeCard';

const FormMi = () => {
  const { form, onChangeInputs, cleanFields } = useForm({ q1: '', q2: '',q3: '',q4: '' });
  //const navigate = useNavigate();

  const sendM1 = (e) => {
    e.preventDefault();
    console.log(form);
    cleanFields();
    // Requisição via axios (useRequestData)
  };

  const cardWidth = useBreakpointValue({ base: '100%', md: '40%' });

  return (
    <>
      <form onSubmit={sendM1}>
        <FormControl >


          <Card>
            <CardHeader>
              <Heading size='md'>Atividade M1</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>

                <Box>

                  <FormLabel>
                    Assista os seguintes vídeos na plataforma do YouTube para completar nosso conteúdo e responder a questão a seguir.
                  </FormLabel>
                  <Box display="flex" justifyContent="center" flexWrap="wrap" gap={'10px'}>
                    <Box width={cardWidth}>
                      <YoutubeCard
                        title={'A origem dos robôs'}
                        subTitle={'Canal: A origem das coisas'}
                        style={{ width: '100%' }}
                        url={'https://www.youtube.com/embed/5lh3OtqkLMU'}
                      />
                    </Box>

                    <Box width={cardWidth}>
                      <YoutubeCard
                        title={'Inteligência artificial'}
                        subTitle={'Canal: Tecmundo'}
                        style={{ width: '100%' }}
                        url={'https://www.youtube.com/embed/Lhu8bdmkMCM'}
                      />
                    </Box>

                  </Box>

                  <Box width="100%" margin={'10px'}>

                    <Heading size='xs' textTransform='uppercase'> 1) Escreva sobre robótica, seu significado, tipos e a importância dessa ciência para humanidade. Cite exemplos.</Heading>
                    <Textarea
                      name="q1"
                      id="q1"
                      value={form.q1}
                      onChange={onChangeInputs}
                      type="Textarea"
                      style={{ width: '100%' }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    2) O que você entende sobre inteligência artificial?  Cite alguns exemplos de como essa tecnologia pode ajudar a humanidade.
                  </Heading>
                  <Textarea
                    name="q2"
                    id="q2"
                    value={form.q2}
                    onChange={onChangeInputs}
                    type="Textarea"
                    style={{ width: '100%' }}
                  />
                  <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>

                  <Heading size='xs' textTransform='uppercase'>
                  3) Qual a diferença entre robótica, robótica industrial e educacional?
                  </Heading>
                  <Textarea
                    name="q3"
                    id="q3"
                    value={form.q3}
                    onChange={onChangeInputs}
                    type="Textarea"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                  4) Imagine que você vai construir um robô que vai resolver um problema em sua casa, bairro, trabalho, escola ou outro lugar que você visita constantemente, descreva o problema e como sua ideia funcionará.
                  </Heading>
                  <Textarea
                    name="q4"
                    id="q4"
                    value={form.q4}
                    onChange={onChangeInputs}
                    type="Textarea"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Text pt='2' fontSize='sm'>
                Obs: A imaginação é livre, tente identificar o problema que o robô poderia resolver.
                  </Text>
               
              </Stack>
            </CardBody>
          </Card>


          <FormHelperText>Confira as questões e clique em enviar</FormHelperText>
          <Button variant="solid" colorScheme="blue" ml="auto" type="submit" >
            Enviar
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default FormMi;
