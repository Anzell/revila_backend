"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchGamesUsecaseParams = exports.SearchGamesUsecase = void 0;
class SearchGamesUsecase {
    constructor(repository) {
        this.repository = repository;
    }
    async call(params) {
        return await this.repository.searchGame(params.query);
    }
}
exports.SearchGamesUsecase = SearchGamesUsecase;
class SearchGamesUsecaseParams {
    constructor(args) {
        this.query = args.query;
    }
}
exports.SearchGamesUsecaseParams = SearchGamesUsecaseParams;
