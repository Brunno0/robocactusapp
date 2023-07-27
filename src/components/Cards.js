import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Cards = ({ title, text, img, left, buttonText, buttonCordinator}) => {
   
  const navigate = useNavigate();
  
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

          <Text py='2' textAlign="justify" >
            {text}
          </Text>
        </CardBody>
        <CardFooter >
          <Button onClick={()=> buttonCordinator(navigate)} variant='solid' colorScheme='blue'ml="auto" >
              {buttonText}
            </Button>
     </CardFooter>
      </Stack>
      {!left ? toLeft() : null}
    </Card>)
}
export default Cards