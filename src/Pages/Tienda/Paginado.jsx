import { Flex, Spacer, Box, Button } from '@chakra-ui/react'

const Paginado = ({ setPage, page, lastPage }) => {
  return (
    <Flex>
      <Box>
          <Button
          bg='blackAlpha.500'
          color="white"
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
            bg: 'gray.700',
            color: 'white'
          }}
          size="md"
          onClick={() => setPage(page - 1)}
            disabled={page === 1}> - </Button>
      </Box>  
      <Spacer />      
      <Box>  
          <Button
          bg='blackAlpha.500'
          color="white"
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
            bg: 'gray.700',
            color: 'white'
          }}
          size="md"
          onClick={() => setPage(page + 1)}
            disabled={page === lastPage + 2}> + </Button>
        
      </Box>
    </Flex>
  )
}
export default Paginado
