import React, { useState } from 'react';
import {
  Box,
  Heading,
  Stack,
  StackDivider,
  useBreakpointValue,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Textarea
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import makeRequest from '../hooks/useRequestGptData';  
import YoutubeCard from './YoutubeCard';  
import { useForm } from '../hooks/useForm';


const FormMi = () => {
  const [feedbacks, setFeedbacks] = useState([]); 
  const { form, onChangeInputs, cleanFields } = useForm({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });

   const calculateRows = (text) => {
    return Math.max(3, (text.match(/\n/g) || []).length + 1);
  };

  const questions = [
    "1) Escreva sobre robótica, seu significado, tipos e a importância dessa ciência para a humanidade. Cite exemplos.",
    "2) O que você entende sobre inteligência artificial? Cite alguns exemplos de como essa tecnologia pode ajudar a humanidade.",
    "3) Qual a diferença entre robótica, robótica industrial e educacional?",
    "4) Imagine que você vai construir um robô que vai resolver um problema em sua casa, bairro, trabalho, escola ou outro lugar que você visita constantemente, descreva o problema e como sua ideia funcionará."
  ];

  const sendM1 = async (e) => {
    e.preventDefault();
    try {
      const feedbacksFromGpt = await Promise.all(questions.map(async (question, index) => {
        const input = {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: question },
            { role: "assistant", content: `Resposta: ${form[`q${index + 1}`]}` }
          ]
        };

        
        const response = await makeRequest(input.messages.map(message => message.content).join('\n'));

        return response;
      }));

      setFeedbacks(feedbacksFromGpt);
      console.log(feedbacks)
      cleanFields();
    } catch (error) {
      console.error('Erro ao fazer a requisição para o GPT-3.5:', error);
    }
  };

  const cardWidth = useBreakpointValue({ base: '100%', md: '40%' });

  const textareaStyle = {
    width: '100%',
    minHeight: '100px',
    resize: 'vertical'
  };

  return (
    <form onSubmit={sendM1}>
      <FormControl>
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
                  <Heading size='xs' textTransform='uppercase'>
                    1) Escreva sobre robótica, seu significado, tipos e a importância dessa ciência para humanidade. Cite exemplos.
                  </Heading>
                  <Textarea
                    name="q1"
                    id="q1"
                    value={form.q1}
                    onChange={onChangeInputs}
                    style={textareaStyle}
                    rows={calculateRows(form.q1)}
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
                  style={textareaStyle}
                  rows={calculateRows(form.q2)}
                />
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
                  style={textareaStyle}
                  rows={calculateRows(form.q3)}
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
                  style={textareaStyle}
                  rows={calculateRows(form.q4)}
                />
              </Box>
            </Stack>

            <FormHelperText>Confira as questões e clique em enviar</FormHelperText>
            <Button
            variant="solid"
            colorScheme="blue"
            float="right"  // Alinha o botão à direita
            type="submit"
            mt={4}  // Adiciona margem ao botão
          > Enviar
          </Button>
          </CardBody>

          
        </Card>
      </FormControl>
    </form>
  );
};

export default FormMi;
