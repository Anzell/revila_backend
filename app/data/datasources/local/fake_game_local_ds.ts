import { Axios } from "axios";
import { FakeGameServerPaths } from "../../../core/constants/fake_game_server_paths";
import { GameDs } from "../../../core/datasources/game_ds_interface";
import { ServerException } from "../../../core/failures/exceptions";
import { Game } from "../../../domain/entities/game";
import { GameMapper } from "../../mappers/game_mapper";
import { GameModel } from "../../models/game_model";

export class FakeGameLocalDsImpl implements GameDs {
    constructor(private readonly http: Axios) { }

    async searchGames(query: string): Promise<Game[]> {
        const result = await this.http.get(`${FakeGameServerPaths.searchGames}?title_like=${query}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (result.status === 200) {
            return result.data.map((gameJson: any) => GameMapper.modelToEntity(GameModel.fromJson(gameJson)))
        }
        throw new ServerException();
    }

}