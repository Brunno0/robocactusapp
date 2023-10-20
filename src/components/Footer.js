import { FaYoutube } from 'react-icons/fa';
import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ isMobile }) => {
  return (
    <Box
      maxW="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify="center" direction="row" align="center">
            <ButtonGroup variant="tertiary" justifyContent="center" alignItems="center">
              <IconButton
                as="a"
                href="https://www.youtube.com/watch?v=p6gdbNmwBKA&ab_channel=BrunoAmorim"
                aria-label="LinkedIn"
                icon={<FaYoutube fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/brunoamorimramos/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://github.com/Brunno0/robocactusapp"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="fg.subtle" textAlign="center">
            &copy; {new Date().getFullYear()} Robôcactus. Todos os direitos reservados.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
