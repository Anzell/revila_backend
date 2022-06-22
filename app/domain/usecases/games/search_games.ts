import { Either } from "../../../../node_modules/purify-ts/Either";
import { Failure } from "../../../core/failures/failures";
import { Usecase } from "../../../core/usecases/usecase";
import { Game } from "../../entities/game";
import { GameRepository } from "../../repositories/game_repository";

export class SearchGamesUsecase implements Usecase<Array<Game>, SearchGamesUsecaseParams>{

    constructor(private readonly repository: GameRepository){}

    async call(params: SearchGamesUsecaseParams): Promise<Either<Failure, Game[]>> {
        return await this.repository.searchGame(params.query);
    }

}

export class SearchGamesUsecaseParams {
    public readonly query: string;

    constructor(args: SearchGamesUsecaseParamsArgs){
        this.query = args.query;
    }   
}

interface SearchGamesUsecaseParamsArgs {
    readonly query: string;
}