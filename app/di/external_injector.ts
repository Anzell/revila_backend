import { Axios } from "axios";

export class ExternalInjector {
    static httpClientFactory() {
        return new Axios();
    }
}