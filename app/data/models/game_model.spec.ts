import { GameModel } from "./game_model";

describe("game model", function() {
    const gameExample = new GameModel({title: "max payne", approval: 100})

    it("should convert object to json", function() {
        const result = gameExample.toJson();
        expect(result).toStrictEqual({
            'title': "max payne",
            'approval': 100,
            'thumbnail': undefined,
            'uid': undefined
        });
    });

    it("should convert json to Model", function() {
        const result = GameModel.fromJson(JSON.stringify({
            'title': "max payne",
            'approval': 100,
            'thumbnail': undefined,
            'uid': undefined
        }));
        expect(result).toStrictEqual(gameExample);
    });
});