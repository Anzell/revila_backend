import { Either } from "../../../node_modules/purify-ts/Either";
import { Failure } from "../../core/failures/failures";
import { Game } from "../entities/game";

export interface GameRepository {
    searchGame(query: string): Promise<Either<Failure, Array<Game>>>;
}