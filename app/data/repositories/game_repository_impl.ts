import { Right } from "purify-ts";
import { Either, Left } from "purify-ts/Either";
import { Failure, ServerFailure } from "../../core/failures/failures";
import { Game } from "../../domain/entities/game";
import { GameRepository } from "../../domain/repositories/game_repository";
import { GameRemoteDs } from "../datasources/remote/game_remote_ds";

export class GameRepositoryImpl implements GameRepository {
    constructor(private readonly datasource: GameRemoteDs){}

    async searchGame(query: string): Promise<Either<Failure, Game[]>> {
        try{
            const result = await this.datasource.searchGame(query);
            return Right(result);
        }catch(e){
            return Left(new ServerFailure());
        }
    }

}