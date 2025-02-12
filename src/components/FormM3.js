import React, { useState, useCallback } from 'react';
import {
  Box,
  Heading,
  Stack,
  StackDivider,
  useBreakpointValue,
  FormControl,
  FormHelperText,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import makeRequest from '../hooks/useRequestGptData';
import YoutubeCard from './YoutubeCard';
import { useForm } from '../hooks/useForm';

const FormM3 = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { form, onChangeInputs, cleanFields } = useForm({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
  });

  // Função para calcular o número de linhas do Textarea
  const calculateRows = useCallback((text) => {
    if (!text || typeof text !== 'string') return 3; // Valor padrão
    return Math.max(3, (text.match(/\n/g) || []).length + 1);
  }, []);

  // Array de questões
  const questions = [
    "1)Desenvolva um código que faça o Arduino ligar o led da placa por 5 segundos e desligado por 3 segundos.",
    "2) Crie um código que imprima seu nome completo no monitor serial. ) O que significa afirmar que o Arduino é um sistema embarcado? Cite exemplos de sistemas embarcados.",
    "3) Faça um programa que imprima 'ligado' no monitor serial quando o led da placa estiver ligado, quando o led estiver desligado imprima 'desligado' no monitor serial. ) O que são Shields? Pesquise e cite exemplos.",
    "4) Qual a diferença entre a lógica e a lógica de programação",
    "5) Qual a importância da lógica de programação para o desenvolvimento de robôs? ) Estamos desenvolvendo um robô limpador autônomo. Em qual parte do código Arduino devemos configurar as portas e incluir as bibliotecas necessárias para o funcionamento do hardware?",
    "6) Escreva como funciona, e como conectar o sensor ultrassônico HC-SR04 ao Arduino. ) O robô utiliza um sensor ultrassônico para medir a distância entre o sensor e um objeto. Em qual janela da IDE do Arduino os dados capturados pelo sensor são exibidos para monitoramento no computador?",
    "7) Explique as funções Serial.begin() e Serial.println()",
    "8) Descreva um projeto em que você poderia utilizar o sensor HC-SR04. (que  já exista ou não)",
  ];

  // Função para enviar o formulário
  const sendM1 = async (e) => {
    e.preventDefault();
    try {
      const feedbacksFromGpt = await Promise.all(
        questions.map(async (question, index) => {
          const input = {
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: question },
              { role: "assistant", content: `Resposta: ${form[`q${index + 1}`]}` },
            ],
          };
          const response = await makeRequest(input.messages.map((message) => message.content).join('\n'));
          return response;
        })
      );
      setFeedbacks(feedbacksFromGpt);
      console.log(feedbacksFromGpt);
      cleanFields();
    } catch (error) {
      console.error('Erro ao fazer a requisição para o GPT-3.5:', error);
    }
  };

  // Estilo do Textarea
  const textareaStyle = {
    width: '100%',
    minHeight: '100px',
    resize: 'vertical',
  };

  // Largura do card responsivo
  const cardWidth = useBreakpointValue({ base: '100%', md: '40%' });

  return (
    <form onSubmit={sendM1}>
      <FormControl>
        <Card>
          <CardHeader>
            <Heading size="md">Atividade M3</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">


              {/* Seção do vídeo do YouTube */}
              {/* 
              <Box>
                <FormLabel>
                  Assista os seguinte vídeo na plataforma do YouTube para completar nosso conteúdo e responder as questões a seguir: 
                 
                </FormLabel>
                <Box display="flex" justifyContent="center" flexWrap="wrap" gap="10px">
                  <Box width={cardWidth}>
                    <YoutubeCard
                      title="O que é Arduino, afinal de contas? #ManualMaker"
                      subTitle="Canal: Manual do Mundo"
                      style={{ width: '100%' }}
                      url="https://www.youtube.com/embed/sv9dDtYnE1g?si=h93yHkHPcJEAL1Rb"
                    />
                  </Box>
                </Box>
              </Box>
                  */}
              {/* Renderização dinâmica das questões */}
              {questions.map((question, index) => (
                <Box key={index}>
                  <Heading size="xs" textTransform="uppercase">
                    {question.split('\n')[0]} {/* Exibe apenas a primeira linha da pergunta */}
                  </Heading>
                  <Textarea
                    name={`q${index + 1}`}
                    id={`q${index + 1}`}
                    value={form[`q${index + 1}`]}
                    onChange={onChangeInputs}
                    style={textareaStyle}
                    rows={calculateRows(form[`q${index + 1}`])}
                  />
                </Box>
              ))}
            </Stack>
            <FormHelperText>Confira as questões e clique em enviar</FormHelperText>
            <Button variant="solid" colorScheme="blue" float="right" type="submit" mt={4}>
              Enviar
            </Button>
          </CardBody>
        </Card>
      </FormControl>
    </form>
  );
};

export default FormM3;