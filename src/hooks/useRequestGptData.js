import axios from 'axios';

const makeRequest = async (inputText) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: inputText,
      max_tokens: 1500
    }, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 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', // Substitua pelo seu token de API do GPT-3.5
        "Content-Type": 'application/json'
      }
    });

    return response.data.choices[0].text;
  } catch (error) {
    throw new Error('Erro ao fazer a requisição para o GPT-3.5');
  }
};

export default makeRequest;
