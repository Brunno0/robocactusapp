import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  IconButton,
  useBreakpointValue,
  
} from '@chakra-ui/react';
import robocactus from '../assests/robocactus.png'
import {  ChevronRightIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { goToContato, goToHome, goToLogin, goToSobre } from '../routes/cordinator';


export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
 
  const toMobile = ()=>{

    return ( <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
        
        <MenuItem icon={<ChevronRightIcon />} onClick={()=>goToHome(navigate)}>
          Home
        </MenuItem>
        <MenuItem icon={<ChevronRightIcon /> } onClick={()=>goToSobre(navigate)}>
          Sobre
        </MenuItem>
        <MenuItem icon={<ChevronRightIcon />} >
          Contato
        </MenuItem>
     
      </MenuList>
    </Menu>)
    
  }
  
  const navigate = useNavigate()



  const buttons = () =>{
    return (
    <><Button onClick={()=>goToHome(navigate)}>Home</Button>
    <Button onClick={()=>goToSobre(navigate)}>Sobre</Button>
    <Button onClick={()=>goToContato(navigate)}>Contato</Button></>)
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
         {isMobile?  toMobile():null}
          </Box>
          {isMobile? null:buttons()}
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={robocactus}
                    background='#338a9e'
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={robocactus}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Seus pontos</MenuItem>
                  <MenuItem>Configurações</MenuItem>
                  <MenuItem onClick={()=>goToLogin(navigate)}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        
      </Box>
      
    </>
  );
}