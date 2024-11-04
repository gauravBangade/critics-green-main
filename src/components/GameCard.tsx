import React from "react";
import { Game } from "../Hooks/useGames";
import { Card, CardBody, Heading, Image, Text, Icon } from "@chakra-ui/react";
import platformIcons from "../utils/platformIcon";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="lg" padding="10px" shadow="lg" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl" marginBottom="4">
          {game.name}
        </Heading>
        <Text fontWeight="bold">Platforms:</Text>

        {/* Display platform icons only */}
        <div style={{ display: "flex", gap: "8px" }}>
          {game.platforms.map(({ platform }) => {
            const PlatformIcon = platformIcons[platform.name];
            return PlatformIcon ? (
              <Icon as={PlatformIcon} key={platform.id} />
            ) : null;
          })}
        </div>
      </CardBody>
    </Card>
  );
};

export default GameCard;
