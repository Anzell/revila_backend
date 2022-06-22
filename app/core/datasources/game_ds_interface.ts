import { Game } from "../../domain/entities/game";

export interface GameDs {
    searchGames(query: string): Promise<Array<Game>>;
}
