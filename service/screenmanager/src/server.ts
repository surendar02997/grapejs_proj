import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { MongoConfig } from './config/MongoConfig'
import { WinstonLogger } from './config/WinstonLogger';
import { Feedseeddata } from './seed';

const PORT = 3004;

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    public mongoUrl: String = process.env.mongoUrl;
    constructor() {
        this.logger.setupLogger();
        this.logger.configureWinston(this.app);
        this.initializeMiddlewares();
        this.mongoSetup();
        this.mongoSeedData();
        this.routePrv.routes(this.app);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
        this.app.use(cors({ credentials: true, origin: true }))
    }

    private mongoSetup(): void {
      
       new MongoConfig();
    }

    private mongoSeedData(): void {
        let seedData = new Feedseeddata();
        seedData.defaultScreen();
    }

}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})