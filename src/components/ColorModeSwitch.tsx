import { HStack, space, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
      <>
          <HStack justifyContent='space-between' padding="10px">
              <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme='green' />
              <Text>Dark Mode</Text>
          </HStack>
      </>
  )
}

export default ColorModeSwitch
