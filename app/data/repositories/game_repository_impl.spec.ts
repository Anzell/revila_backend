import { Left, Right } from "purify-ts";
import { ServerException } from "../../core/failures/exceptions";
import { ServerFailure } from "../../core/failures/failures";
import { Game } from "../../domain/entities/game";
import { GameRepositoryImpl } from "./game_repository_impl";

describe("game repository impl", function () {
    it("should return a array of games if call to datasource is success", async function () {
        const expected: Array<Game> = [
            new Game({title: "Max Payne", approval: 10})
        ];
        const datasourceMock: any = {
            searchGame: jest.fn().mockReturnValue(expected)
        }
        const usecase = new GameRepositoryImpl(datasourceMock);
        const result = await usecase.searchGame("max payne");
        expect(result).toStrictEqual(Right(expected));
    });

    it("should return a failure if call to datasource is fail", async function() {   
        const repositoryMock: any = {
            searchGame: jest.fn().mockRejectedValue(new ServerException())
        }
        const usecase = new GameRepositoryImpl(repositoryMock);
        const result = await usecase.searchGame("max payne");
        expect(result).toStrictEqual(Left(new ServerFailure()));
    });
});