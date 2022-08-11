import { useContext } from 'react'

import { Box, Container, Text, Heading } from '@chakra-ui/react'

import CartContext from '../../Context/CartContext'

const Datos = () => {
  const { username, email } = useContext(CartContext)
  return (
    <Container maxW="container.xl" mt="5">
      <Box w={'500px'} margin={'0 auto'} bgColor={'gainsboro'} p={'5'} rounded={'lg'}>
        <Heading textAlign={'center'} p={'3'} mb={'2'}>
          Mis Datos
        </Heading>
        <Text fontWeight={'bold'}> Nombre: </Text>
        <Text mb={'2'}>{username}</Text>
        <Text fontWeight={'bold'}> Email: </Text>
        <Text mb={'2'}>{email}</Text>
      </Box>
    </Container>
  )
}

export default Datos
