
import { ChakraProvider } from '@chakra-ui/react'
import HompePage from './pages/HomePage';
import Router from "./routes/Router";


function App() {
  return (
    <ChakraProvider>
      <Router/>
    </ChakraProvider>
  )
}


export default App;
