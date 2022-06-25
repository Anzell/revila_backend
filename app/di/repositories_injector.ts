import { GameRepositoryImpl } from "../data/repositories/game_repository_impl";
import { GameRepository } from "../domain/repositories/game_repository";
import { DatasourcesInjector } from "./datasources_injector";

export class RepositoriesInjector {
    static gameRepositoryFactory(): GameRepository {
        return new GameRepositoryImpl(DatasourcesInjector.gameDatasourceFactory());
    }
}