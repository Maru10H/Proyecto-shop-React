import { useContext } from 'react'

import { Flex } from '@chakra-ui/react'

import CartContext from '../../Context/CartContext'
import useGet from '../../Hooks/useGet'
import Tarjeta from "../../Components/Tarjeta"


const Cards = ({ offPage, elementsForPage}) => {
  const { data } = useGet('/products?populate[0]=image')
  const { addProduct } = useContext(CartContext)

  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {data &&
        [...data.data].splice(offPage, elementsForPage)
        .map((producto) => {
          return (
            <Tarjeta 
            producto={producto}
            addProduct={addProduct}
            key={`Card${producto.id}`}
            ></Tarjeta>
          )
        })}
    </Flex>
  )
}

export default Cards
