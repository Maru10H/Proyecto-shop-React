import { useContext, useState } from 'react'

import useGet from "../../Hooks/useGet";

import { Flex, Input, Container, Box, FormLabel, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, FormControl, Switch, Text, Heading } from '@chakra-ui/react'

import Cards from '../../Main/Cards'

import Paginado from './Paginado'
import Tarjeta from '../../Components/Tarjeta';

import CartContext from '../../Context/CartContext'

const elementsForPage = 6

const Tienda = () => {
  const [page, setPage] = useState(1)
  const [productos, setProducto] = useState([])
  const { data } = useGet('/products?populate[0]=image')
  const [minRange, setMinRange] = useState(5000)
  const [maxRange, setMaxRange] = useState(25000)
  const {addProduct} = useContext(CartContext)
  
  const lastPage = Math.ceil([data].length / elementsForPage)
  const offPage = elementsForPage * (page - 1)

  const handleOnKeyPress = (event) => {
    const filtrarP = data.data.filter((productFl) =>
        productFl.attributes.title.toLowerCase().includes(event.target.value)
      )
    
    setProducto(filtrarP)
    setPage(1)
  }

  const productoEnStock=(id)=>{
    const disponibles = productos.map((producto)=> {
      if ((producto.id === id) && (producto.attributes.stock >= 1)){
        return producto
      }

      setProducto(disponibles)
    })
  }
 
  const handleRangeSlider = (value) => {
    
    const minValue = value[0]
    const maxValue = value[1]
    setMinRange(minValue)
    setMaxRange(maxValue)
    const filtrarPrecio = data.data.filter(
      (product) =>
        product.attributes.price >= minValue &&
        product.attributes.price <= maxValue
    )
    setProducto(filtrarPrecio)
    setPage(1)
  }
 
  return (
    <>
      <Container maxW="container.xl" mt="5">        
          <Flex>
            <Box w={'30%'}>
              <Box>
                <Heading pb={'20px'} pt={'20px'}>Productos</Heading>
                <Input
                  type="search"
                  placeholder="Buscar..."
                  mb={'30px'}
                  onKeyDown={handleOnKeyPress}
                />
              </Box>
              
              <Box>
                <Text fontSize={'16px'}>
                  Filtrar por precio
                </Text>
                <RangeSlider
                onChange={handleRangeSlider}
                aria-label={['min', 'max']}
                defaultValue={[5000, 25000]}
                min={0}
                max={25000}
                 >
                  <RangeSliderTrack bg={'blackAlpha.300'}>
                    <RangeSliderFilledTrack bg={'blackAlpha.700'}/>
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Text fontSize={'16px'}>
                  Precio: ${minRange} - ${maxRange}
                </Text>
              </Box>
              <FormControl display="flex" flexDirection={'column'} mt={'30px'}>
                <FormLabel htmlFor="stock" mb="0">
                  Unidades disponibles
                </FormLabel>
                <Switch id="stock" mt={'15px'} colorScheme='green' 
                />
                
              </FormControl>
            </Box>               
            <Box w={'70%'}>
              <Flex flexDir={'column'} >
                <Flex flexWrap="wrap" justifyContent="space-around">
                  {
                    !!productos.length || <Cards offPage={offPage} elementsForPage={elementsForPage} />
                  }

                  {
                    !!productos.length && [...productos]
                    .splice(offPage, elementsForPage)
                    .map((producto) => {
                      return (
                        <Tarjeta 
                        producto={producto}
                        addProduct={addProduct}
                        key={`Card${producto.id}`}
                        ></Tarjeta>
                      )
                    })
                  }
        
                </Flex>           
              </Flex> 
              <Paginado page={page} setPage={setPage} lastPage={lastPage} />
            </Box>
          </Flex>
      </Container>
    </>
  )
}

export default Tienda
