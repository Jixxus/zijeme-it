import { Controller, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Box } from "@shared/interfaces";
import { Repository } from "typeorm";
import { BoxDB } from "./box.entity";

@Controller("boxes")
export class BoxesController {
    constructor(
        @InjectRepository(BoxDB)
        private boxesRepository: Repository<BoxDB>
    ) {}

    @Get()
    async getBoxes(): Promise<Box[]> {
        return this.boxesRepository.find();
    }
}
