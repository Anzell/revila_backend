import { Either } from "../../../../node_modules/purify-ts/Either";
import { Failure } from "../../../core/failures/failures";
import { Usecase } from "../../../core/usecases/usecase";
import { Game } from "../../entities/game";
import { GameRepository } from "../../repositories/game_repository";
export declare class SearchGamesUsecase implements Usecase<Array<Game>, SearchGamesUsecaseParams> {
    private readonly repository;
    constructor(repository: GameRepository);
    call(params: SearchGamesUsecaseParams): Promise<Either<Game[], Failure>>;
}
export declare class SearchGamesUsecaseParams {
    readonly query: string;
    constructor(args: SearchGamesUsecaseParamsArgs);
}
declare type SearchGamesUsecaseParamsArgs = {
    readonly query: string;
};
export {};
