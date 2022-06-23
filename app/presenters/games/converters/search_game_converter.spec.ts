import { Left, Right } from "purify-ts";
import { ValidationFailure } from "../../../core/failures/failures";
import { SearchGameConverter, SearchGameConverterErrorMessages, SearchGameConverterParams } from "./search_game_converter";

describe("search game converter", function () {
    it("should return a valid object if data provided is valid", function() {
        const converter = new SearchGameConverter();
        const result = converter.call(new SearchGameConverterParams("max"));
        expect(result).toStrictEqual(Right({query: "max"}))
    });

    it("should return a failure object if data provided is fail", function() {
        const converter = new SearchGameConverter();
        let result = converter.call(new SearchGameConverterParams());
        expect(result).toStrictEqual(Left(new ValidationFailure(SearchGameConverterErrorMessages.missingOrInvalidQuery)));
        result = converter.call(new SearchGameConverterParams(""));
        expect(result).toStrictEqual(Left(new ValidationFailure(SearchGameConverterErrorMessages.missingOrInvalidQuery)));
    });
});