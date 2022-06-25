import { GameDs } from "../core/datasources/game_ds_interface";
import { FakeGameLocalDsImpl } from "../data/datasources/local/fake_game_local_ds";
import { ExternalInjector } from "./external_injector";

export class DatasourcesInjector{
    static gameDatasourceFactory(): GameDs {
        return new FakeGameLocalDsImpl(ExternalInjector.httpClientFactory());
    }
}