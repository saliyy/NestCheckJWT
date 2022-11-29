import {Controller, Get, HttpStatus, UseGuards} from '@nestjs/common';
import { JwtVerifyGuard } from '../auth/jwt-verify.guard';
import { ZavgarUsersService } from "./zavgar-users.service";

@Controller('zavgar-users')
export class ZavgarUsersController {

  constructor(private zavgarUsersService: ZavgarUsersService) {
  }

  @UseGuards(JwtVerifyGuard)
  @Get()
  async showAllUsers() {
    const ArturPapayan =  await this.zavgarUsersService.getPapayan();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      ArturPapayan
    };
  }
}
