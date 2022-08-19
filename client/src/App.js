import logo from './logo.svg';

import { Avatar, Button, ChakraProvider, CSSReset, Flex, Icon, Image, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, SettingsIcon, StarIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef } from 'react';

function MenuItems(isTablet) {
  return (
    <Flex flexDirection={isTablet ? 'column' : 'row'} columnGap="10px" rowGap="10px">
      <Text>Home</Text>
      <Text>Dashboard</Text>
      <Text>Tasks</Text>
    </Flex>
  )
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isTablet] = useMediaQuery("(max-width: 768px)")
  const btnRef = useRef()

  return (
    <ChakraProvider>
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <Flex
          height="50px"
          bg="#ddd"
          justifyContent="space-between"
          alignItems="center"
          px="20px"
        >
          {!isTablet && (
            <Flex alignItems="center" columnGap="20px">
              <Image src={logo} alt="logo" width="44px" height="44px" />

              {MenuItems(isTablet)}
            </Flex>
          )}

          {isTablet && (
            <Button onClick={onOpen}>
              <Icon as={HamburgerIcon} />
            </Button>
          )}

          <Flex alignItems="center" columnGap="20px">
            <Icon as={SearchIcon} />
            <Icon as={SettingsIcon} />
            <Icon as={StarIcon} />

            <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' w="34px" h="34px" />
          </Flex>
        </Flex>

        <CSSReset />

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image src={logo} alt="logo" width="44px" height="44px" />
            </DrawerHeader>

            <DrawerBody>
              {MenuItems(isTablet)}
            </DrawerBody>

            <DrawerFooter>
              Hello
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* </header> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
