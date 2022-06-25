import { SearchGamesUsecase } from "../domain/usecases/games/search_games";
import { RepositoriesInjector } from "./repositories_injector";

export class UsecasesInjector{
    static searchGameUsecaseFactory(): SearchGamesUsecase {
        return new SearchGamesUsecase(RepositoriesInjector.gameRepositoryFactory());
    }
}