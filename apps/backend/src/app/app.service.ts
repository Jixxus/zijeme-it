import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getData(): { message: number } {
        return { message: Math.random() };
    }
}
