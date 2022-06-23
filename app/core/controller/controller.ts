import { CustomResponse } from "../response/custom_response";

export interface Controller {
    call(request: any): Promise<CustomResponse>;
}