import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ZavgarUsersEntity} from "./zavgar-users.entity";
import {Repository} from "typeorm";

@Injectable()
export class ZavgarUsersService {

    readonly ARTUR_PAPAYAN_ID: number = 73;

    constructor(
        @InjectRepository(ZavgarUsersEntity)
        private usersRepository: Repository<ZavgarUsersEntity>,
    ) {}

    async getPapayan(): Promise<ZavgarUsersEntity> {
        return await this.usersRepository.findOne({ where: { id: this.ARTUR_PAPAYAN_ID } });
    }
}
