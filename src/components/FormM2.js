import React, { useState, useCallback } from 'react';
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
  Textarea,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import makeRequest from '../hooks/useRequestGptData';
import YoutubeCard from './YoutubeCard';
import { useForm } from '../hooks/useForm';

const FormM2 = () => {
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
    "1) Qual a diferença entre as duas partes da plataforma Arduino?",
    "2) O que significa afirmar que o Arduino é um sistema embarcado? Cite exemplos de sistemas embarcados.",
    "3) O que são Shields? Pesquise e cite exemplos.",
    "4) Sobre o hardware do Arduino, relacione as colunas abaixo:\n\n" +
      "( ) Entrada da placa para tensão externa.\n" +
      "( ) Reinicia a placa.\n" +
      "( ) Envia e recebe impulsos elétricos HIGH e LOW para ligado e desligado.\n" +
      "( ) Armazena o código e controla as portas de entrada e saída.\n" +
      "( ) Sinaliza o recebimento ou envio de dados na placa.\n" +
      "( ) Informa se a placa está ligada.\n" +
      "( ) Nessas, são conectados os sensores, atuadores e componentes que utilizam sinais que variam a tensão entre 0V e 5V.\n\n" +
      "1. Conector de alimentação (DC)\n" +
      "2. Microcontrolador ATmega328P\n" +
      "3. Portas digitais\n" +
      "4. LEDs TX e RX\n" +
      "5. Botão Reset\n" +
      "6. LED on/off\n" +
      "7. Portas analógicas",
    "5) Estamos desenvolvendo um robô limpador autônomo. Em qual parte do código Arduino devemos configurar as portas e incluir as bibliotecas necessárias para o funcionamento do hardware?",
    "6) O robô utiliza um sensor ultrassônico para medir a distância entre o sensor e um objeto. Em qual janela da IDE do Arduino os dados capturados pelo sensor são exibidos para monitoramento no computador?",
    "7) Na IDE do Arduino, qual opção do menu permite configurar a porta COM utilizada para a comunicação entre o Arduino e o computador?",
    "8) Explique a diferença entre as funções 'setup()' e 'loop()' na programação do Arduino, destacando o propósito de cada uma.",
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
            <Heading size="md">Atividade M2</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {/* Seção do vídeo do YouTube */}
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

export default FormM2;