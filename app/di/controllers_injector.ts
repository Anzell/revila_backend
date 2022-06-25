import { SearchGameController } from "../presenters/games/controllers/search_game_controller";
import { ConvertersInjector } from "./converters_injector";
import { UsecasesInjector } from "./usecases_injector";

export class ControllersInjector {
    static searchGameController(): SearchGameController{
        return new SearchGameController({searchGameConverter: ConvertersInjector.searchGamesConverterFactory(), searchGameUsecase: UsecasesInjector.searchGameUsecaseFactory()});
    }
}