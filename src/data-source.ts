import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.js"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "devuser",
    password: ".@.@.@",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
