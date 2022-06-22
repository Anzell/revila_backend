import { Left, Right } from "../../../../node_modules/purify-ts/Either";
import { ServerFailure } from "../../../core/failures/failures";
import { Game } from "../../entities/game";
import { SearchGamesUsecase } from "./search_games";


describe("search games usecases", function () {
    it("should return a array of games if call to repository is success", async function () {
        const expected: Array<Game> = [
            new Game({title: "Max Payne", approval: 10})
        ];
        const repositoryMock: any = {
            searchGame: jest.fn().mockReturnValue(Right(expected))
        }
        const usecase = new SearchGamesUsecase(repositoryMock);
        const result = await usecase.call({query: "max payne"});
        expect(result).toStrictEqual(Right(expected));
    });

    it("should return a failure if call to repository is fail", async function() {   
        const repositoryMock: any = {
            searchGame: jest.fn().mockReturnValue(Left(new ServerFailure()))
        }
        const usecase = new SearchGamesUsecase(repositoryMock);
        const result = await usecase.call({query: "max payne"});
        expect(result).toStrictEqual(Left(new ServerFailure()));
    });
});