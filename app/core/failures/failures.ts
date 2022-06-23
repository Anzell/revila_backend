export interface Failure{}
export class ServerFailure implements Failure{}
export class ValidationFailure implements Failure{
    constructor(
        public readonly message:string
    ){}
}