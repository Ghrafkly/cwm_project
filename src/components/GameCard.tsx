import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImg from "../services/image-url";
import Emoji from "./Emoji";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card>
      <Image src={getCroppedImg(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
