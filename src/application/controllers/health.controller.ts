import { Controller, Get } from '@nestjs/common';
import { OK_HEALTH } from '../../domain/consts/health.const';

@Controller('health')
export class HealthController {
  @Get()
  healthCheck(): string {
    return OK_HEALTH;
  }
}
