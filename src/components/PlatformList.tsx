import React from 'react'
import { Platform } from '../Hooks/useGames'
import { Text } from '@chakra-ui/react'

interface Props {
  platforms: Platform[]
}

function PlatformList({platforms}: Props) {
  return (
      <>
          {platforms.map((platform) => (
              <Text key={platform.id}>{platform.name}</Text>
          ))}
     </>
  )
}

export default PlatformList
