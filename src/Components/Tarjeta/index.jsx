import { Link } from 'react-router-dom'

import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex
} from '@chakra-ui/react'

import { BsCart } from 'react-icons/bs'

const Tarjeta=({producto, addProduct})=>{
    return (
        <Flex py={12} key={`Card${producto.id}`}>
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                  
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      filter: 'blur(15px)',
                      zIndex: -1
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)'
                      }
                    }}
                  >
                    <Link to={`productos/${producto.attributes.title}`}>
                    <Image
                      rounded={'lg'}
                      height={250}
                      width={270}
                      objectFit={'contain'}
                      src={
                        producto.attributes.image.data.attributes.formats.thumbnail.url
                      }
                    />
                    </Link>
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Text
                      color={'gray.500'}
                      fontSize={'sm'}
                      textTransform={'uppercase'}
                    >
                      Adidas
                    </Text>
                    <Heading
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={500}
                    >
                      {producto.attributes.title}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                      <Text fontWeight={800} fontSize={'xl'}>
                        {producto.attributes.price}
                      </Text>
                    </Stack>
                  </Stack>
                  <Flex justifyContent="center" alignItems="center">          
                    <Button
                     rounded={'md'}
                     w={'50'}
                     mt={2}
                     size={'md'}
                     py={'3'}
                     bg={useColorModeValue('white', 'gray.900')}
                     color={useColorModeValue('gray.900', 'gray.50')}
                     textTransform={'uppercase'}
                     _hover={{
                       transform: 'translateY(2px)',
                       boxShadow: 'lg',
                       bg: 'gray.900',
                       color: 'white'
                     }}
                     onClick={() => addProduct(producto)}
                      >
                     <BsCart />
                    </Button>
                  </Flex> 
                </Box>
        </Flex>
    )
}

export default Tarjeta