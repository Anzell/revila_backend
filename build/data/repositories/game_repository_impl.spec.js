"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purify_ts_1 = require("purify-ts");
const exceptions_1 = require("../../core/failures/exceptions");
const failures_1 = require("../../core/failures/failures");
const game_1 = require("../../domain/entities/game");
const game_repository_impl_1 = require("./game_repository_impl");
describe("game repository impl", function () {
    it("should return a array of games if call to datasource is success", async function () {
        const expected = [
            new game_1.Game({ title: "Max Payne", approval: 10 })
        ];
        const datasourceMock = {
            searchGame: jest.fn().mockReturnValue(expected)
        };
        const usecase = new game_repository_impl_1.GameRepositoryImpl(datasourceMock);
        const result = await usecase.searchGame("max payne");
        expect(result).toStrictEqual((0, purify_ts_1.Right)(expected));
    });
    it("should return a failure if call to datasource is fail", async function () {
        const repositoryMock = {
            searchGame: jest.fn().mockRejectedValue(new exceptions_1.ServerException())
        };
        const usecase = new game_repository_impl_1.GameRepositoryImpl(repositoryMock);
        const result = await usecase.searchGame("max payne");
        expect(result).toStrictEqual((0, purify_ts_1.Left)(new failures_1.ServerFailure()));
    });
});
