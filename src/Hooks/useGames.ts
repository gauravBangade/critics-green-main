import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image?: string; // Optional property example
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
      const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState<string | null>(null);
      const [loading, setLoading] = useState(true);

    useEffect(() => {
          
        const controller = new AbortController();
        apiClient
          .get<FetchGamesResponse>("/games")
          .then((res) => {
            setGames(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
        return () => controller.abort();
      }, []);
    
    return { games, loading, error };
};

export default useGames;
