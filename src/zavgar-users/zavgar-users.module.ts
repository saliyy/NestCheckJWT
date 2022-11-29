import { Module } from '@nestjs/common';
import { ZavgarUsersController } from './zavgar-users.controller';
import { ZavgarUsersService } from './zavgar-users.service';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ZavgarUsersEntity} from "./zavgar-users.entity";

@Module({
  controllers: [ZavgarUsersController],
  providers: [ZavgarUsersService],
  imports: [AuthModule, JwtModule, TypeOrmModule.forFeature([ZavgarUsersEntity])],
})
export class ZavgarUsersModule {}
