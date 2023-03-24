
import {  Box, Flex, Text, IconButton,
    Button, Stack, Collapse,  Icon, Link,
  Popover, PopoverTrigger,  PopoverContent,  useColorModeValue,
    useBreakpointValue, useDisclosure, } from '@chakra-ui/react';
  import {HamburgerIcon,
    CloseIcon,ChevronDownIcon, ChevronRightIcon,
  } from '@chakra-ui/icons';
  import axios from 'axios'
  import { useToast } from '@chakra-ui/react'
  import {
    Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton, FormControl, FormLabel,
    Input} from '@chakra-ui/react'
  import React from 'react'
  import { RiCalculatorFill } from "react-icons/ri";
  import {  BsFillMoonFill } from "react-icons/bs";
  import {  FaPlane,FaHotel ,FaBus} from "react-icons/fa";
  import { GiPalmTree,GiCruiser } from "react-icons/gi";
  import { useNavigate } from "react-router-dom";  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const signname=JSON.parse(localStorage.getItem("singup"))
    // console.log(signname)
    return (
      //position='fixed' right={'0px'}left='0px' top='0px'
      <Box zIndex={'banner'} color={'white'}position='fixed' top='0px'right={"0px"}left='0px' >
        <Flex 
      
          bg={useColorModeValue('#07162d', 'gray.800')}
          color={useColorModeValue('white', 'white')}
          minH={'90px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          
          >
          <Flex   
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex marginLeft={'15%'} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link href="/">
          <img   src={"https://dhiz4uvf5rpaq.cloudfront.net/in/V2/assets/images/webp/home-logo.webp"} 
         alt="Logo"  width={"auto"}
         height={"auto"}
         priority />
         </Link>
  
            <Flex justifyContent={"center"}alignItems="center" display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack marginRight={'15%'}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>


             <Login/>
            <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#ac1a1a'}
              href={'signup'}
              _hover={{
                bg: '#d12e2e',
              }}>
              REGISTER
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('d12e2e', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'}  >
        {NAV_ITEMS.map((navItem) => (
          <Box   key={navItem.label} display='flex' color={'white'} >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                activeStyle={{color: "#d12e2e"}}
                  p={3}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                //   color={"white"}
                  _hover={{
                    textDecoration: 'none',
                    color: "#d12e2e",
                  }}>
              <Box w='100%' >
{
    navItem.image
}
</Box>
       
                  {navItem.label}

                </Link>
                    </PopoverTrigger>
     
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>         
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
        >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
  
      label: 'Flight',
     link:"flight",
     image:<FaPlane  />
    },
    {
      label: 'Hotel',
       link:"hotel",
     image:<FaHotel  w='50px'/>

    },
    {
        label: 'Visa',
         link:"visa",
     image:<RiCalculatorFill  w='50px'/>

      },
      {
        label: 'Holiday',
       link:"holiday",
     image:<GiPalmTree  w='50px'/>

      },
      {
        label: 'Bus',
       link:"bus",
     image:<FaBus  w='50px'/>

      },
      {
        label: 'Cruise',
       link:"cruise",
     image:<GiCruiser  w='50px'/>

      },
      {
        label: 'Umrah',
       link:"umrah",
     image:<BsFillMoonFill  w='50px'/>

      },

  ];


  
const Login=()=> {
  const toast = useToast()
  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  const navling=useNavigate()
   const logindat={
    email:email,
    password:password
   }
   const logindata=()=>{
    axios.post("https://smoggy-sheath-dress-fish.cyclic.app/users/login",logindat)
    .then( (response)=> {
      console.log(response);
      localStorage.setItem("token",response.data.token);
      toast({
        position: 'top',
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
    .catch((error) =>{
      console.log(error);
      toast({
        position: 'top',
        title: 'Something Went Wrong.',
        description: "Please Check Again.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    });
    console.log(logindat)
   }
  
  return (
    <>
      <Button onClick={onOpen}
               as={'a'}
               display={{ base: 'inline-flex', md: 'inline-flex' }}
               fontSize={'sm'}
               fontWeight={600}
               color={'white'}
               bg={'#ac1a1a'}
            
               _hover={{
                 bg: '#d12e2e',
               }}
              >
              LOGIN
            </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)}value={email} ref={initialRef} placeholder='Email' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input onChange={(e)=>setPassword(e.target.value)}value={password} placeholder='Password' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={logindata}>
              Log In
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
        
      </Modal>
    </>
  )
}