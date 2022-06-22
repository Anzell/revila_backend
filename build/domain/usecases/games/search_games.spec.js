"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("../../../../node_modules/purify-ts/Either");
const failures_1 = require("../../../core/failures/failures");
const game_1 = require("../../entities/game");
const search_games_1 = require("./search_games");
describe("search games usecases", function () {
    it("should return a array of games if call to repository is success", async function () {
        const expected = [
            new game_1.Game({ title: "Max Payne", approval: 10 })
        ];
        const repositoryMock = {
            searchGame: jest.fn().mockReturnValue((0, Either_1.Right)(expected))
        };
        const usecase = new search_games_1.SearchGamesUsecase(repositoryMock);
        const result = await usecase.call({ query: "max payne" });
        expect(result).toStrictEqual((0, Either_1.Right)(expected));
    });
    it("should return a failure if call to repository is fail", async function () {
        const repositoryMock = {
            searchGame: jest.fn().mockReturnValue((0, Either_1.Left)(new failures_1.ServerFailure()))
        };
        const usecase = new search_games_1.SearchGamesUsecase(repositoryMock);
        const result = await usecase.call({ query: "max payne" });
        expect(result).toStrictEqual((0, Either_1.Left)(new failures_1.ServerFailure()));
    });
});
