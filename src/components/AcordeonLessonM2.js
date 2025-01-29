import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FormMi from './FormMi'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'


const AcordeonLesson = ({isMobile}) => {
        return (
<Accordion allowMultiple >
<AccordionItem >
    <h2>
        <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
                <Heading size='sm'> Atividade MII </Heading>
            </Box>
            <AccordionIcon />
        </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        {/* <Stack direction='row'>
            <Badge>Default</Badge>
            <Badge colorScheme='green'>Success</Badge>
            <Badge colorScheme='red'>Removed</Badge>
            <Badge colorScheme='purple'>New</Badge>
        </Stack> */}
        {/* <Highlight textAlign="justify" query={
            ['ciência da computação', 'mecânica', 'eletrônica', 'cadeia cinemática', 'sensores', 'autonomia', 'indústria', 'medicina', 'segurança', 'hardware', 'software']}
            styles={{
                px: ['1', '2', '3'],
                py: ['0.5', '1', '1.5'],
                rounded: 'full',
                bg: 'teal.100',
                fontSize: ['md',],
                lineHeight: ['base', 'tall', 'tall'],
            }}>
            Texto
        </Highlight> */}
              <FormMi/>
    </AccordionPanel>
</AccordionItem>
</Accordion>
    )}
export default AcordeonLesson