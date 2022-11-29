import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  exports: [AuthModule, JwtModule, ConfigService],
  providers: [ConfigService, JwtModule],
})
export class AuthModule {}
