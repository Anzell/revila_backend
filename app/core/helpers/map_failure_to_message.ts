import { ServerFailureMessages } from "../constants/server_messages";
import { Failure, ValidationFailure } from "../failures/failures";

export function mapFailureToMessage(failure: Failure): string {
    if(failure instanceof ValidationFailure){
        return failure.message;
    }
    return ServerFailureMessages.serverFailure;
}