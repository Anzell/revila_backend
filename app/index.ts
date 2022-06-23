require("dotenv").config();
import * as http from "http";

class App {
    static async initApp(): Promise<void> {
        try{
            const appExpress = (await import("./main/config/app")).default;
            const httpServer = http.createServer(appExpress);
            httpServer.listen(process.env.PORT || 3000, () => {
                console.log("Servidor online");
            });
        }catch(e){
            console.log(e);
        }
    }
}

App.initApp();