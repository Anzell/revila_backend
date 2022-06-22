import { Game } from "../../../domain/entities/game";

export interface GameRemoteDs {
    searchGame(query: string): Promise<Array<Game>>;
}