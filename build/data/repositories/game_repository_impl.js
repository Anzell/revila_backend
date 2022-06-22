"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRepositoryImpl = void 0;
const purify_ts_1 = require("purify-ts");
const Either_1 = require("purify-ts/Either");
const failures_1 = require("../../core/failures/failures");
class GameRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    async searchGame(query) {
        try {
            const result = await this.datasource.searchGame(query);
            return (0, purify_ts_1.Right)(result);
        }
        catch (e) {
            return (0, Either_1.Left)(new failures_1.ServerFailure());
        }
    }
}
exports.GameRepositoryImpl = GameRepositoryImpl;
