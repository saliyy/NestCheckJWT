import {Controller, Get, HttpStatus, UseGuards} from '@nestjs/common';
import { JwtVerifyGuard } from '../auth/jwt-verify.guard';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @UseGuards(JwtVerifyGuard)
  @Get()
  async getUser() {
    const someUser =  await this.usersService.getUser();
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      someUser
    };
  }
}
