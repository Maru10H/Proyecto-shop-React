import { useContext } from 'react'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Flex,
  useColorModeValue,
  useDisclosure,
  useToast,
  Box,
  Heading
} from '@chakra-ui/react'
import { BsCart } from 'react-icons/bs'

import CartContext from '../../Context/CartContext'
import Producto from './Producto'
import { Link } from 'react-router-dom'


const Carrito = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, vaciarCarrito, calcularTotal, token } = useContext(CartContext)

  const toast = useToast()
  const total = calcularTotal()

  return (
    <>
      <Button onClick={onOpen} bg={useColorModeValue('none')}>
        {<BsCart />}  {cart.length}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
           <Heading size="lg">Carrito</Heading>
          </DrawerHeader>
          {!!cart.length || (
            <DrawerBody>
              <Text> No hay productos en el carrito ☹️</Text>
            </DrawerBody>
          )}

          {!!cart.length && (
            <>
              <DrawerBody>
                {cart.map((producto) => (
                  <Producto
                    producto={producto}
                    key={`cartProduct${producto.id}`}
                  />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Flex>
                  <Text fontWeight={'bold'} fontSize={'21px'}>
                    Total: $ {total}
                  </Text>
                </Flex>
                
                  {token && 
                      <Link to='/carrito'>
                        <Button
                          variant="outline"                          
                          mb={3}
                          size='md'
                          onClick={onClose}
                          color={'gray.200'}
                          bg={'whatsapp.700'}
                          _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                            bg:'whatsapp.200',
                            color: 'black'
                          }}
                        >
                          Continuar compra
                        </Button>
                      </Link>                  
                  }
                  {!!token ||
                      <Button
                      variant="outline"
                      
                      mb={3}
                      size='md'
                      onClick={()=> toast({
                        title: 'Debes estar logueado para finalizar la compra',
                        status: 'warning',
                        duration: 7000,
                        isClosable: true
                      })}
                      color={'gray.200'}
                      bg={'whatsapp.700'}
                          _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                            bg:'whatsapp.200',
                            color: 'black'
                          }}
                      >
                      Continuar compra
                      </Button>                 
                  }

                    <Button
                      variant="outline"
                      mt={2}
                      size='md'
                      onClick={() => vaciarCarrito()}                  
                      _hover={{
                        transform: 'translateY(2px)',
                        boxShadow: 'lg',
                        bg:'red.400',
                        color: 'black'
                      }}
                    >
                      Vaciar Carrito
                    </Button>

              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Carrito
