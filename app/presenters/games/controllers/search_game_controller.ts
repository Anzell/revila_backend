import { ResponseCodes } from "../../../core/constants/codes";
import { ServerSuccessMessages } from "../../../core/constants/server_messages";
import { Controller } from "../../../core/controller/controller";
import { Failure } from "../../../core/failures/failures";
import { mapFailureToCode } from "../../../core/helpers/map_failure_to_code";
import { mapFailureToMessage } from "../../../core/helpers/map_failure_to_message";
import { CustomResponse } from "../../../core/response/custom_response";
import { SearchGamesUsecase } from "../../../domain/usecases/games/search_games";
import { SearchGameConverter } from "../converters/search_game_converter";

export class SearchGameController implements Controller{
    constructor(private args: SearchGameControllerArgs){}

    async call(request: any): Promise<CustomResponse> {
        return await new Promise<CustomResponse>(async (resolve) => {
            const converterResult = this.args.searchGameConverter.call({query: request["query"]});
            converterResult.map(async (convertedQuery) => {
                const usecaseResult = await this.args.searchGameUsecase.call({query: convertedQuery.query});
                usecaseResult.map((rooms) => {
                    resolve(new CustomResponse({
                        code: ResponseCodes.success,
                        codeStatus: 200,
                        message: ServerSuccessMessages.operationSuccess,
                        result: rooms
                    }));
                });
                usecaseResult.mapLeft((failure) => resolve(this.createFailureResponse(failure)));
            });
            converterResult.mapLeft((failure) => resolve(this.createFailureResponse(failure)));
        });
    }

    private createFailureResponse(failure: Failure): CustomResponse{
        return new CustomResponse({
            code: mapFailureToCode(failure),
            codeStatus: 400,
            message: mapFailureToMessage(failure),
            result: {}
        });
    }

}

interface SearchGameControllerArgs {
    readonly searchGameConverter: SearchGameConverter;
    readonly searchGameUsecase: SearchGamesUsecase; 
}