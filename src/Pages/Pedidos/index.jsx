import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import Producto from '../../Layout/Navbar/Producto'
import { Link } from 'react-router-dom'


const PedidosCarrito =()=>{
    const { cart, calcularTotal } = useContext(CartContext)
    const total = calcularTotal()

    return (
        <>
        <Container maxW="container.xl" mt="5">
            
            <Text
                fontSize={'35px'}
                fontWeight={'bold'}
                pb={'30px'}
                pt={'30px'}
              >
                Finalizar compra
            </Text>
            <Flex>
                <Box w='50%'>
                    <Box>
                        <Box>
                            {!!cart.length || (
                                <Box>
                                    <Text> No hay productos en el carrito ☹️</Text>
                                </Box>
                            )}
                
                            {!!cart.length && (
                                <Box>
                                    {cart.map((producto) => (
                                    <Box w={"60%"}>
                                        <Producto
                                            producto={producto}
                                            key={`cartProduct${producto.id}`}
                                        />
                                     </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    </Box>    
                </Box>
                <Box w='40%'>
                    <Box bg='gray.300' rounded={'lg'}>
                        <Text fontSize={'28px'} pb={'20px'} pt={'20px'} marginLeft={'20px'}>
                        Pedido
                        </Text>
                        <Flex flexDir={'column'} justifyContent={'space-between'} marginLeft={'20px'} marginRight={'20px'} pb={'30px'} pt={'10px'}>
                            <Flex justifyContent={'space-between'} >
                                <Text>Envio</Text>                          
                                <Text>Por el momento no hacemos envios ☹️</Text>  
                            </Flex>
                            <Flex justifyContent={'space-between'} pb={'30px'} pt={'15px'}>
                                <Text>Total</Text>
                                <Text fontWeight={'bold'}>{`$ ${total}`}</Text>
                            </Flex>
                            <Link to='/pedidos'>
                            <Button 
                            color={'gray.800'}
                            bg={'whatsapp.300'}
                            _hover={{
                              transform: 'translateY(2px)',
                              boxShadow: 'lg',
                              bg:'whatsapp.700',
                              color: 'black'
                            }}
                            >Finalizar Compra</Button>
                            </Link>
                        </Flex>

                    </Box>
                </Box>
            </Flex>

        </Container>
        </>
    )
}

export default PedidosCarrito