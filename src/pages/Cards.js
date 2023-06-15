import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
//transformar esse card em um componente que aceita props

const Cards = ({ title, text, img, left, buttonText }) => {
  //Módulo I - Vamos falar sobre robótica?
  // Neste módulo, daremos início aos nossos estudos de robótica. Abordaremos tópicos como a robótica industrial, presente em diversos setores da indústria, impulsionando a automação de processos e aumentando a eficiência produtiva. Também exploraremos a robótica educacional, desempenhando um papel importante no ensino e no desenvolvimento de habilidades. Além disso, mergulharemos na fascinante área da inteligência artificial, possibilitando aos robôs tomar decisões e interagir de forma inteligente com o ambiente. Por fim, teremos uma atividade relacionada ao módulo. Prepare-se para expandir seu conhecimento e explorar o mundo da robótica em suas diversas vertentes.

  const toLeft = () => {
    return (
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={img}
        alt='Caffe Latte'
        background='#338a9e'
      />)
  }

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      {left ? toLeft() : null}
      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>

          <Text py='2' textAlign="justify">
            {text}
          </Text>
        </CardBody>

        <CardFooter >
          {left ? (
            <Button variant='solid' colorScheme='blue'>
              {buttonText}
            </Button>
          ) : (
            <Button variant='solid' colorScheme='blue' ml="auto">
              {buttonText}
            </Button>
          )}


        </CardFooter>
      </Stack>
      {!left ? toLeft() : null}
    </Card>)

}
export default Cards