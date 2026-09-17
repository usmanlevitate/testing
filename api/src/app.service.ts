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
    const uptimeSeconds = Math.floor(process.uptime());

    return {
      status: 'ok' as const,
      uptimeSeconds,
      uptimeHuman: formatUptime(uptimeSeconds),
      node: process.version,
      memoryMb: Math.round(process.memoryUsage().rss / 1024 / 1024),
      checkedAt: new Date().toISOString(),
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

function formatUptime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
}
