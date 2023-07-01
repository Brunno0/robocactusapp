import { useForm } from '../hooks/useForm';
//import { useNavigate } from 'react-router-dom';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

import {
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
    Textarea,
} from '@chakra-ui/react';
import YoutubeCard from './YoutubeCard';

const FormMi = () => {
    const { form, onChangeInputs, cleanFields } = useForm({q1:''});
    //const navigate = useNavigate();

    const sendM1 = (e) => {
        e.preventDefault();
        console.log(form);
        cleanFields();
        // Requisição via axios (useRequestData)
    };

    const cardWidth = useBreakpointValue({ base: '100%', md: '40%' });

    return (
        <>
            <h1>Atividade M1</h1>
            <form onSubmit={sendM1}>
            <FormControl >
                <FormLabel>
                   1) Assista os seguintes vídeos na plataforma do YouTube para completar nosso conteúdo.
                </FormLabel>
               <Box display="flex" justifyContent="center" flexWrap="wrap" gap= {'10px'}>
                    <Box width={cardWidth}>
                        <YoutubeCard
                            title={'A origem dos robôs'}
                            subTitle={'Canal: A origem das coisas'}
                            style={{ width: '100%' }}
                            url ={'https://www.youtube.com/embed/5lh3OtqkLMU'}
                        />
                    </Box>
                   
                    <Box width={cardWidth}>
                        <YoutubeCard
                            title={'Inteligência artificial'}
                            subTitle={'Canal: Tecmundo'}
                            style={{ width: '100%' }}
                            url ={'https://www.youtube.com/embed/Lhu8bdmkMCM'}
                        />
                    </Box>
                    
                </Box>

                <Box width="100%" margin={'10px'}>

                    <Text> Escreva sobre robótica, seu significado, tipos e a importância dessa ciência para humanidade. Cite exemplos.</Text>
                    <Textarea
                        name="q1"
                        id="q1"
                        value={form.q1}
                        onChange={onChangeInputs}
                        type="Textarea"
                        style={{ width: '100%' }}
                    />
                </Box>
                
                
                <FormHelperText>Confira as questões e clique em enviar</FormHelperText>
                <Button variant="solid" colorScheme="blue" ml="auto" type="submit">
                    Enviar
                </Button>
            </FormControl>
            </form>
        </>
    );
};

export default FormMi;
