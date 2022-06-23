import * as express from "express";
import setupMiddlewares from "./middleware";
import setupSecurity from "./security";
import setupRoutes from "./routes";

const app = express();
setupMiddlewares(app);
setupSecurity(app);
setupRoutes(app);
export default app;