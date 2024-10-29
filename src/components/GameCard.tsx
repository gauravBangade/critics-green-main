import React from 'react'
import { Game } from '../Hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props{
    game : Game
}

const GameCard  = ({ game }: Props) => {

  return (
      <Card borderRadius={"lg"} padding="10px" shadow="lg" overflow="hidden">
          <Image src={game.background_image} alt={game.name} />
          <CardBody>
              <Heading fontSize={"2xl"}>{game.name}</Heading>
          </CardBody>
    </Card>
  )
};

export default GameCard
