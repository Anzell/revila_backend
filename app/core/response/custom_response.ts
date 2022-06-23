export class CustomResponse{
    public readonly codeStatus: number;
    public readonly message: string;
    public readonly code: string;
    public readonly result: any;

    constructor(args: CustomResponseArgs){
        this.codeStatus = args.codeStatus;
        this.message = args.message;
        this.result = args.result;
        this.code = args.code;
    }
}

interface CustomResponseArgs {
    readonly codeStatus: number;
    readonly message: string;
    readonly code: string;
    readonly result: any;
}