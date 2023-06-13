import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button } from '@chakra-ui/react'
import robocactus from '../assests/robocactus.png'
//transformar esse card em um componente que aceita props

const Cards = () => {

return(
<Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={robocactus}
      alt='Caffe Latte'
      background='#338a9e'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>Módulo I - Vamos falar sobre robótica?</Heading>
  
        <Text py='2'>
        Neste módulo, daremos início aos nossos estudos de robótica. Abordaremos tópicos como a robótica industrial, presente em diversos setores da indústria, impulsionando a automação de processos e aumentando a eficiência produtiva. Também exploraremos a robótica educacional, desempenhando um papel importante no ensino e no desenvolvimento de habilidades. Além disso, mergulharemos na fascinante área da inteligência artificial, possibilitando aos robôs tomar decisões e interagir de forma inteligente com o ambiente. Por fim, teremos uma atividade relacionada ao módulo. Prepare-se para expandir seu conhecimento e explorar o mundo da robótica em suas diversas vertentes.
        </Text>
      </CardBody>
  
      <CardFooter>
        <Button variant='solid' colorScheme='blue'>
          Simbora!
        </Button>
      </CardFooter>
    </Stack>
  </Card>)

}
export default Cards