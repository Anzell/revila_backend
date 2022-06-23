import { Controller } from "../../core/controller/controller";
import {Request, Response} from "express";

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, resp: Response) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {}),
            ...(req.query || {})
        };
        const httpResponse = await controller.call(request);
        resp.status(httpResponse.codeStatus).json(httpResponse);
    }
}