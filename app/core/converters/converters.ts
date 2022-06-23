import { Either } from "purify-ts";
import { ValidationFailure } from "../failures/failures";

export interface Converter<ReturnType, Params> {
    call(params: Params): Either<ValidationFailure, ReturnType>;
}