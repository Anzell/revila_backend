import { Left, Right } from "purify-ts";
import { ResponseCodes } from "../../../core/constants/codes";
import { ServerFailureMessages, ServerSuccessMessages } from "../../../core/constants/server_messages";
import { ServerFailure, ValidationFailure } from "../../../core/failures/failures";
import { CustomResponse } from "../../../core/response/custom_response";
import { Game } from "../../../domain/entities/game";
import { SearchGameController } from "./search_game_controller";

describe("search game controller", function(){
    it("should return a valid response with a list of games", async function(){
        const expected: Array<Game> = [
            new Game({title: "max payne", approval: 70})
        ];
        const mockConverter: any = {
            call: jest.fn().mockReturnValue(Right({query: "max"}))
        };
        const mockUsecase: any = {
            call: jest.fn().mockReturnValue(Right(expected))
        };
        const controller = new SearchGameController({searchGameConverter: mockConverter, searchGameUsecase: mockUsecase});
        const result = await controller.call({query: "max"});
        expect(result).toStrictEqual(new CustomResponse({
            code: ResponseCodes.success,
            codeStatus: 200,
            message: ServerSuccessMessages.operationSuccess,
            result: expected
        }));
    });

    it("should return a response with status code 400 if call to converter is fail", async function(){
        const expected: Array<Game> = [
            new Game({title: "max payne", approval: 70})
        ];
        const mockConverter: any = {
            call: jest.fn().mockReturnValue(Left(new ValidationFailure("error")))
        };
        const mockUsecase: any = {
            call: jest.fn().mockReturnValue(Right(expected))
        };
        const controller = new SearchGameController({searchGameConverter: mockConverter, searchGameUsecase: mockUsecase});
        const result = await controller.call({query: "max"});
        expect(result).toStrictEqual(new CustomResponse({
            code: ResponseCodes.validationFailure,
            codeStatus: 400,
            message: "error",
            result: {}
        }));
    });

    it("should return a response with status code 400 if call to usecase is fail", async function(){
        const mockConverter: any = {
            call: jest.fn().mockReturnValue(Right({query: "max"}))
        };
        const mockUsecase: any = {
            call: jest.fn().mockReturnValue(Left(new ServerFailure()))
        };
        const controller = new SearchGameController({searchGameConverter: mockConverter, searchGameUsecase: mockUsecase});
        const result = await controller.call({query: "max"});
        expect(result).toStrictEqual(new CustomResponse({
            code: ResponseCodes.serverFailure,
            codeStatus: 400,
            message: ServerFailureMessages.serverFailure,
            result: {}
        }));
    });
});