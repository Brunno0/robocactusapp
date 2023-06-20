import React from 'react';
import {
    Box,
    Button,
    ChakraProvider,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { goToHome } from '../routes/cordinator';
import Header from '../components/Header'

const LoginPage = () => {
    const navigate = useNavigate();

    return (

        <Container maxW="md" mt={8} justifyContent="center" alignItems="center"
        >
            <Box px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    ROBOCACTUS APP
                </Flex>
            </Box>

            <Box  p={8} borderRadius="md" boxShadow="md" >
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
        </Container>

    );
};

export default LoginPage;
