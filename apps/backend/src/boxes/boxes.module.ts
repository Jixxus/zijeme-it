import { Module } from "@nestjs/common";
import { BoxesController } from "./boxes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoxDB } from "./box.entity";

@Module({
    imports: [TypeOrmModule.forFeature([BoxDB])],
    controllers: [BoxesController],
})
export class BoxesModule {}
