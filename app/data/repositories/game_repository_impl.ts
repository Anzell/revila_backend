import { Right } from "purify-ts";
import { Either, Left } from "purify-ts/Either";
import { GameDs } from "../../core/datasources/game_ds_interface";
import { Failure, ServerFailure } from "../../core/failures/failures";
import { Game } from "../../domain/entities/game";
import { GameRepository } from "../../domain/repositories/game_repository";

export class GameRepositoryImpl implements GameRepository {
    constructor(private readonly datasource: GameDs){}

    async searchGame(query: string): Promise<Either<Failure, Game[]>> {
        try{
            const result = await this.datasource.searchGames(query);
            return Right(result);
        }catch(e){
            return Left(new ServerFailure());
        }
    }

}