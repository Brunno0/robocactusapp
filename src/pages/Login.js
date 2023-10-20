import React from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router';
import { goToHome } from '../routes/cordinator';
import Footer from '../components/Footer';
import robocactus from '../assets/robocactus.png';  // Corrigido o caminho da imagem

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <Container maxW="md" mt={8} display="flex" flexDirection="column" alignItems="center">
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                maxH='200px'
                src={robocactus}
                alt='Caffe Latte'
                          />

            <Box p={8} borderRadius="md" boxShadow="md" width="100%">
                <Heading mb={4}>Login</Heading>
                <form>
                    <Stack spacing={3}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>

                        <Button colorScheme="blue" type="submit" onClick={() => goToHome(navigate)}>
                            Login
                        </Button>
                    </Stack>
                </form>

                <Text mt={4} textAlign="center">
                    Não tem uma conta? <Text as="span" color="blue.500">cadastre-se</Text>
                </Text>
            </Box>
            <Footer />
        </Container>
    );
};

export default LoginPage;
