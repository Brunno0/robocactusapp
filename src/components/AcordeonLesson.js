import React from 'react';
import {  Badge, Stack } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/react';
import { Highlight } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import FormMi from './FormMi'


const AcordeonLesson = ({isMobile}) => {
    
 
    return (
<Accordion allowMultiple >
<AccordionItem >
    <h2>
        <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
                <Heading size='sm'> Atividade MI </Heading>
            </Box>
            <AccordionIcon />
        </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Stack direction='row'>
            <Badge>Default</Badge>
            <Badge colorScheme='green'>Success</Badge>
            <Badge colorScheme='red'>Removed</Badge>
            <Badge colorScheme='purple'>New</Badge>
        </Stack>
        <Highlight textAlign="justify" query={
            ['ciência da computação', 'mecânica', 'eletrônica', 'cadeia cinemática', 'sensores', 'autonomia', 'indústria', 'medicina', 'segurança', 'hardware', 'software']}
            styles={{
                px: ['1', '2', '3'],
                py: ['0.5', '1', '1.5'],
                rounded: 'full',
                bg: 'teal.100',
                fontSize: ['md',],
                lineHeight: ['base', 'tall', 'tall'],
            }}>
            Robótica é uma ciência que combina mecânica, eletrônica e ciência da computação. Seus estudos permitem construir máquinas programadas para realizar tarefas, robôs. Existem vários tipos de robôs, e sua classificação e aplicação dependem de seus sensores, cadeia cinemática de movimento, autonomia, etc. Várias são as áreas nas quais o robô pode desempenhar um papel, seja na indústria, medicina, segurança, entre outras.

            Para entendermos como o robô funciona, precisaremos identificar suas partes físicas e lógicas.  O hardware  (parte física) é feito de peças como Arduino, sensores, motores, fios e todos os componentes que podemos tocar, e o software (parte lógica) é um programa, um ambiente de desenvolvimento de códigos de computador (IDE) que vai controlar o hardware.
        </Highlight>

                   <FormMi/>

    </AccordionPanel>
</AccordionItem>







</Accordion>
    )}
export default AcordeonLesson