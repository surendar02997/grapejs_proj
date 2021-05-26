 
import * as mongoose from "mongoose";

export class MongoConfig {
    constructor(){
    console.log('MongoConfig');
    mongoose.connect('mongodb://localhost:2997/newgrapes1', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('DB Connnected');
    }).catch( () => {
        console.log('Err on connection');
    });
}
}