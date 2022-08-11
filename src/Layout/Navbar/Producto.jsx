import { useContext } from 'react'

import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import {
  BsFillTrashFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsPlusLg
} from 'react-icons/bs'

import { GrTrash } from 'react-icons/gr'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import CartContext from '../../Context/CartContext'

const Producto = ({ producto }) => {
  const { deleteProduct, addProduct, remProduct } = useContext(CartContext)

  return (
    <Flex mt="5" key={`producto${producto.id}`}>
      <Image
        src={producto.attributes.image.data.attributes.formats.thumbnail.url}
        w="40%"
        objectFit="cover"
        alt={`imagen de producto ${producto.attributes.title}`}
      />
      <Box ml={1}>
        <Heading size="sm"> {producto.attributes.title}</Heading>
        <Text fontSize={'16px'}>$ {producto.attributes.price}</Text>
        <Text fontSize={'14px'} mt="1" fontWeight={'bold'}>
          x {producto.cantidad} {producto.cantidad > 1 ? 'unidades' : 'unidad'}
        </Text>
        {
        producto.cantidad > 1 
        ? <IconButton
        mr="1"
        icon={<AiOutlineMinus />}
        onClick={() => remProduct(producto)} /> : 
        <IconButton
        mr="1"
        icon={<AiOutlineMinus />}
         /> 
        }
             
        <IconButton
        mr="1"
        icon={<AiOutlinePlus />}
        onClick={()=> addProduct(producto)} 
      />
      <IconButton
        icon={<GrTrash />}
        onClick={() => deleteProduct(producto.id)}
      />
      </Box>
    </Flex>
  )
}

export default Producto
