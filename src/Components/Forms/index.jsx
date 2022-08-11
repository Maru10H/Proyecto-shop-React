import React, { useContext, useEffect } from 'react'
import CartContext from '../../Context/CartContext'
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { FaRegUser } from 'react-icons/fa'


import Register from './Register'
import SesionIniciada from '../SesionIniciada'
import Login from './Login'

const Forms = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { token } = useContext(CartContext)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  useEffect(() => {
    if (token) {
      onClose()
    }
  }, [token])

  return (
    <>
    {!token && (
      <Button onClick={onOpen} bg={useColorModeValue('none')}>
        {<FaRegUser />}
      </Button>
    )}
      <SesionIniciada />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        <ModalOverlay />
        <ModalContent>
          <Tabs isFitted variant='enclosed'>
            <TabList mb='1em'>
              <Tab width={'50%'} mt={'3'} 
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                bg: 'gray.900',
                color: 'white'
              }}>
                Ingresar
              </Tab>
              <Tab width={'50%'} mt={'3'} 
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                bg: 'gray.900',
                color: 'white'
              }}>
                Registrarse
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ModalCloseButton mb={'2'}/>
                <Login />
              </TabPanel>
              <TabPanel>
                <ModalCloseButton mb={'2'}/>
                <Register />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Forms
