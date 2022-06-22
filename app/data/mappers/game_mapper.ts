import { Game } from "../../domain/entities/game";
import { GameModel } from "../models/game_model";

export class GameMapper {
    static entityToModel(entity: Game): GameModel {
        return new GameModel({
            title: entity.title,
            approval: entity.approval,
            thumbnail: entity.thumbnail,
            uid: entity.uid
        });
    }

    static modelToEntity(model: GameModel): Game {
        return new Game({
            title: model.title,
            approval: model.approval,
            thumbnail: model.thumbnail,
            uid: model.uid
        });
    }
}