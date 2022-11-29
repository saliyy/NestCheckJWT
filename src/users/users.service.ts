import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "./users.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {

    readonly SOME_USER_ID: number = 73;

    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
    ) {}

    async getUser(): Promise<UsersEntity> {
        return await this.usersRepository.findOne({ where: { id: this.SOME_USER_ID } });
    }
}
