import React from "react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { Flex, Box, Heading, Text, AspectRatio } from '@chakra-ui/react';

const YoutubeCard = ({title,subTitle,description,url}) => {

    return (


<Card maxW='md'>
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          
          <Box>
            <Heading size='sm'>{title}</Heading>
           <br/>
            <Text>{subTitle}</Text>
          </Box>
        </Flex>
       
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>
        {description}
      </Text>
    </CardBody>
    <AspectRatio vw={'50%'} ratio={1} margin={'10px'}>
        <iframe
            title={title}
            src={url}
            allowFullScreen
        />
    </AspectRatio>
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
     
    </CardFooter>
</Card>)
}
export default YoutubeCard