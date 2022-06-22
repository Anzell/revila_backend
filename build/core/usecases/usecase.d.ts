import { Either } from "../../../node_modules/purify-ts/Either";
import { Failure } from "../failures/failures";
export interface Usecase<ReturnType, Params> {
    call(params: Params): Promise<Either<ReturnType, Failure>>;
}
export declare class NoParams {
}
