import React from 'react'

import Header from '../components/Header'
import styled from 'styled-components'
import Cards from './Cards';

  const Container = styled.div`
  width: 100%;
  padding: 20px; /* Espaçamento interno para conteúdo */
  /* Adicione estilos adicionais para torná-lo responsivo */
  @media (max-width: 768px) {
    /* Estilos para dispositivos com largura máxima de 768px */
    padding: 10px; /* Reduza o espaçamento para dispositivos menores */
  }
  `;

const HompePage = () => {
 
  return (
    <>
      <Header />
      <Container>
        <Cards></Cards>

      </Container>
    </>
  )
}
export default HompePage