import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    return (
      <Flex
        /*minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>*/
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
                <Stack align={'center'}>
                <img src="https://www.deere.com.br/assets/images/deere-logo-agriculture.svg"></img>
            <Heading fontSize={'2xl'}>Acesse a sua conta!</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            <Link color={'green.400'}></Link> 
            </Text>
          </Stack>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Usuário</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Lembre-me</Checkbox>
                  <Link color={'yellow.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'yellow.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  