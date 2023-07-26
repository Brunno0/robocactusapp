import React from 'react';

function highlightWords(text, wordsToHighlight) {
  const words = wordsToHighlight.map((word) => word.toLowerCase());

  const splitRegex = new RegExp(`(${words.join('|')})`, 'gi');
  const parts = text.split(splitRegex);

  return parts.map((part, index) => {
    const isHighlighted = words.includes(part.toLowerCase());
    return isHighlighted ? <TextHighlight key={index}>{part}</TextHighlight> : part;
  });
}

const TextHighlight = ({ children }) => {
  return <span style={{ backgroundColor: '#E6FFFA' }}>{children}</span>;
};

const HighlightedText = () => {
  const wordsToHighlight = [
    'ciência da computação',
    'mecânica',
    'eletrônica',
    'cadeia cinemática',
    'sensores',
    'autonomia',
    'indústria',
    'medicina',
    'segurança',
    'hardware',
    'software',
  ];

  const textT = `
    Robótica é uma ciência que combina mecânica, eletrônica e ciência da computação. Seus estudos permitem construir máquinas programadas para realizar tarefas, robôs. Existem vários tipos de robôs, e sua classificação e aplicação dependem de seus sensores, cadeia cinemática de movimento, autonomia, etc. Várias são as áreas nas quais o robô pode desempenhar um papel, seja na indústria, medicina, segurança, entre outras.

    Para entendermos como o robô funciona, precisaremos identificar suas partes físicas e lógicas. O hardware (parte física) é feito de peças como Arduino, sensores, motores, fios e todos os componentes que podemos tocar, e o software (parte lógica) é um programa, um ambiente de desenvolvimento de códigos de computador (IDE) que vai controlar o hardware.

    Imagine explorar um vasto universo de possibilidades! A Robótica oferece diversos tipos de robôs, cada um com sua classificação e aplicação específicas. Suas características, como sensores avançados, a cadeia cinemática de movimento e a autonomia, definem sua atuação em áreas tão diversas quanto indústria, medicina, segurança, e muito mais.

    Na indústria, os robôs assumem o protagonismo na automação industrial.
    
    O célebre Braço Robótico Industrial lidera o cenário, realizando tarefas repetitivas e precisas, como montagem de peças, elevando a eficiência da produção a um novo patamar.

    Já na medicina, um fascinante mundo de avanços é desbravado com o Robô Cirúrgico. Em operações complexas, ele se destaca como um aliado inestimável, permitindo movimentos precisos e minimamente invasivos, trazendo resultados promissores para a recuperação dos pacientes.

    Na busca por segurança, a presença dos robôs é inestimável. Especializados em tarefas de alto risco e ambientes perigosos, esses intrépidos protetores, como os dedicados à desativação de bombas ou à inspeção de locais hostis, garantem a preservação de vidas humanas.

    Agricultura e exploração espacial, também, não ficam de fora! Robôs Agrícolas abrem caminho para a otimização de cultivos e o aumento da produção de alimentos, enquanto Sondas e Robôs Espaciais nos presenteiam com dados e imagens surpreendentes de planetas e luas distantes.

    Para desvendar o funcionamento dessas maravilhas tecnológicas, é crucial conhecer suas duas partes principais: o hardware e o software. O hardware, a parte física, é construído com peças fascinantes, tais como Arduino, sensores, motores e fios, prontas para criar uma coreografia de movimentos incríveis. E, por sua vez, o software, a parte lógica, é a mente brilhante do robô, um programa que controla com maestria cada ação do hardware, possibilitado pelo ambiente de desenvolvimento de códigos de computador, conhecido como IDE.

    O futuro está sendo moldado pela Robótica. Para quem ousa se aventurar nesse mundo de criatividade e inovação, as possibilidades são infindáveis. Desde a aplicação em setores industriais, médicos e de segurança até a exploração dos confins do espaço, a robótica nos leva a novos horizontes e impulsiona a sociedade rumo a um futuro incrível, guiado por máquinas inteligentes e habilidades humanas combinadas.
  `;

  return (
    <>
      {highlightWords(textT, wordsToHighlight).map((part, index) => (
        <React.Fragment key={index}>{part}</React.Fragment>
      ))}
    </>
  );
};

export default HighlightedText;
