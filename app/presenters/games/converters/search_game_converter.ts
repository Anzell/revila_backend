import { Either, Left, Right } from "purify-ts";
import { Converter } from "../../../core/converters/converters";
import { ValidationFailure } from "../../../core/failures/failures";

export class SearchGameConverter implements Converter<SearchGameConverted, SearchGameConverterParams>{
    call(params: SearchGameConverterParams): Either<ValidationFailure, SearchGameConverted> {
        if(params.query === undefined || params.query === ""){
            return Left(new ValidationFailure(SearchGameConverterErrorMessages.missingOrInvalidQuery));
        }
        return Right({query: params.query});
    }
}

interface SearchGameConverted {
    readonly query: string;
}

export class SearchGameConverterParams {
    constructor(public readonly query?: string){}
}

export class SearchGameConverterErrorMessages{
    static readonly missingOrInvalidQuery: string = "É necessário informar um termo de busca";
}