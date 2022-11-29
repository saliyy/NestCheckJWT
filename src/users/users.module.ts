import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users.entity";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AuthModule, JwtModule, TypeOrmModule.forFeature([UsersEntity])],
})
export class UsersModule {}
