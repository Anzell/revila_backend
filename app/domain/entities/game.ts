export class Game {
    readonly uid?: string;
    readonly title: string;
    readonly approval?: number;
    readonly thumbnail?: string;

    constructor (args: GameArgs){
        this.approval = args.approval;
        this.thumbnail = args.thumbnail;
        this.title = args.title;
        this.uid = args.uid;
    }
}

interface GameArgs {
    readonly uid?: string;
    readonly title: string;
    readonly approval?: number;
    readonly thumbnail?: string;
}