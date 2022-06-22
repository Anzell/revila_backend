export declare class Game {
    readonly uid?: string;
    readonly title: string;
    readonly approval?: number;
    readonly thumbnail?: string;
    constructor(args: GameArgs);
}
interface GameArgs {
    readonly uid?: string;
    readonly title: string;
    readonly approval?: number;
    readonly thumbnail?: string;
}
export {};
