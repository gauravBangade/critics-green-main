import React from "react";
import useGames from "../Hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { px } from "framer-motion";


function GameGrid() {
    const {games, loading, error} = useGames();

  return (
      <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5 }} padding='10px' spacing={10}>
          {games.map((game) => (
           <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default GameGrid;
