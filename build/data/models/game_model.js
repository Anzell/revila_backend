"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = void 0;
const game_1 = require("../../domain/entities/game");
class GameModel extends game_1.Game {
    toJson() {
        return {
            'title': this.title,
            'approval': this.approval,
            'thumbnail': this.thumbnail,
            'uid': this.uid
        };
    }
    static fromJson(serialized) {
        const json = JSON.parse(serialized);
        return new GameModel({
            title: json['title'],
            approval: json['approval'],
            thumbnail: json['thumbnail'],
            uid: json['uid']
        });
    }
}
exports.GameModel = GameModel;
