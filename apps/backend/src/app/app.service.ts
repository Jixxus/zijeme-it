import { Injectable } from "@nestjs/common";
import { Api } from "@shared/interfaces";

@Injectable()
export class AppService {
    getData(): Api {
        return { message: Math.random() };
    }
}
