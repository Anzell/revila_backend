import { ResponseCodes } from "../constants/codes";
import { Failure, ValidationFailure } from "../failures/failures";

export function mapFailureToCode(failure: Failure): string {
    if(failure instanceof ValidationFailure) {
        return ResponseCodes.validationFailure;
    }
    return ResponseCodes.serverFailure;
}