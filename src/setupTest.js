// setupTests.js

// Importa extensões de expect do Testing Library
import '@testing-library/jest-dom/extend-expect';

// Importa um mock global para Axios (exemplo)
import axios from 'axios';
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  // ... outras funções mockadas do Axios
}));

// Define variáveis de ambiente para testes
process.env.NODE_ENV = 'test';
process.env.REACT_APP_API_URL = 'http://localhost:3000/api';

// Importa polyfills, se necessário
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Importa mock global para o HTML5 Canvas (exemplo)
import 'jest-canvas-mock';
