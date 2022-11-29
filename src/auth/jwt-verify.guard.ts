import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtVerifyGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();

      const authHeader = request.headers.authorization;

      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Zavgar Unauthorized 403' });
      }

      const publicKey = this.configService.get<string>('PUBLIC_KEY')

      this.jwtService.verify(token, { publicKey, algorithms: ["RS256"] });

      return true;
    } catch (ex) {
      throw new UnauthorizedException({ message: 'Zavgar Unauthorized 403' });
    }
  }
}
