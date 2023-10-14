import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Importa o MemoryRouter
import Modulo1 from "../pages/Modulo1";
import HomePage from "../pages/HomePage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"; // Importa o ChakraProvider e extendTheme
import  userEvent  from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';


const theme = extendTheme(); // Cria um tema Chakra vazio

// Renderiza os componentes dentro do ChakraProvider com o tema vazio
const renderWithChakra = (ui) => {
  return render(
    <ChakraProvider theme={theme}>
      <MemoryRouter> {/* Renderiza o componente dentro do MemoryRouter */}
        {ui}
      </MemoryRouter>
    </ChakraProvider>
  );
};

// Verifica se a variável global "matchMedia" já está definida. 
// Caso não esteja definida (em ambientes de teste, por exemplo), 
// a linha seguinte será executada para definir um valor padrão.
global.matchMedia = global.matchMedia || function () {
    // Retorna um objeto simulando a funcionalidade de matchMedia.
    return {
    
      matches: false,
 
      addListener: jest.fn(),

      removeListener: jest.fn(),
    };
  };
  

describe("Testes da HomePage", () => {
  
  test("Deve renderizar Modulo1.js", async () => {
    const user = userEvent.setup()
    renderWithChakra(<HomePage />);
  
    // Encontra o botão e clica nele
    const oxeSimboraButton = screen.getByRole('button', { name: /oxe, simbora!/i });
    user.click(oxeSimboraButton); 
    // Aguarda até que a página Modulo1 seja renderizada
    await screen.findByText("Módulo I - Vamos falar sobre robótica?");
  
    // Verifica se a página Modulo1 foi renderizada
    const modulo1Title = screen.getByText("Módulo I - Vamos falar sobre robótica?");
    expect(modulo1Title).toBeInTheDocument();
  });
  
});
