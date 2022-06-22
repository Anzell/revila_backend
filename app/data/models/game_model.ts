import { Game } from "../../domain/entities/game";

export class GameModel extends Game {
    public toJson(): Object {
        return {
            'title': this.title,
            'approval': this.approval,
            'thumbnail': this.thumbnail,
            'uid': this.uid
        };
    }

    static fromJson(json: any): GameModel {
        return new GameModel({
            title: json['title'],
            approval: json['approval'],
            thumbnail: json['thumbnail'],
            uid: json['uid']
        });
    }
}