import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello from NestJS!',
      service: 'api',
      timestamp: new Date().toISOString(),
    };
  }

  getHealth() {
    return {
      status: 'ok',
      uptime: process.uptime(),
    };
  }

  getInfo() {
    return {
      name: 'testing-api',
      version: '1.1.0',
      framework: 'NestJS',
      endpoints: ['/', '/health', '/info'],
    };
  }
}
