import { SearchGameConverter } from "../presenters/games/converters/search_game_converter";

export class ConvertersInjector{
    static searchGamesConverterFactory(): SearchGameConverter {
        return new SearchGameConverter();
    }
}