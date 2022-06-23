import axios, { AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from "axios";
import { ServerException } from "../../../core/failures/exceptions";
import { Game } from "../../../domain/entities/game";
import { FakeGameLocalDsImpl } from "./fake_game_local_ds";

describe("fake game remote ds impl", function () {
    it("should return a array of games by query filter", async function () {
        const ds = new FakeGameLocalDsImpl(axios);
        const result = await ds.searchGames("max");
        expect(result).toStrictEqual([
            new Game({
                title: "max payne 3",
                thumbnail: "https://s2.glbimg.com/BsBBqF3LpKNFlIQCSoA2caVgLjs=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/T/S/qfnXu0SFqegnQ4Yo1x8g/2012-03-07-max-payne-3-cover-art.jpg",
                approval: 100,
                uid: "1"
            })
        ]);
    });

    it("should throw ServerException if call to api is fail", async function () {
        const mockAxios: any = {
            get: jest.fn().mockReturnValue(new MockFailResponse())
        }
        const ds = new FakeGameLocalDsImpl(mockAxios);
        await expect(ds.searchGames("max")).rejects.toThrow(new ServerException());
    });
});

class MockFailResponse implements AxiosResponse {
    data: any;
    status: number;
    statusText: string;
    headers: AxiosResponseHeaders;
    config: AxiosRequestConfig<any>;
    request?: any;


    constructor(){
        this.data = {
            "message": "generic error"
        };
        this.status = 400;
        this.statusText= "error";
        this.headers = {
            "Content-Type": "application/json"
        };
        this.config = {};

    }

}