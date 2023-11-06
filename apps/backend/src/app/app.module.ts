import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TypeOrmModule } from "@nestjs/typeorm";
import { BoxDB } from "../boxes/box.entity";
import { BoxesModule } from "../boxes/boxes.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env["DB_HOST"],
            port: parseInt(process.env["DB_PORT"], 10),
            username: process.env["DB_USER"],
            password: process.env["DB_PASSWORD"],
            database: process.env["DB_NAME"],
            entities: [BoxDB],
            synchronize: true, // set to false for production!
        }),
        BoxesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
