import axios from 'axios';



const makeRequest = async (inputText) => {
 // console.log(env.API_KEY)
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: inputText,
      max_tokens: 1500
    }, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`, // You gpt api in .env
        "Content-Type": 'application/json'
      }
    });
    

    return response.data.choices[0].text;
  } catch (error) {
    console.log(error)
    throw new Error('Erro ao fazer a requisição para o GPT-3.5');
  }
};

export default makeRequest;
