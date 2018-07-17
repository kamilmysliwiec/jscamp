import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as path from 'path';

type ConfigurationKey = 'PORT';

@Injectable()
export class ConfigService {
  constructor() {
    dotenv.config({
      path: path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`),
    });
  }

  getNumber(key: ConfigurationKey): number | undefined {
    return +process.env[key] as number | undefined;
  }

  getBoolean(key: ConfigurationKey): boolean {
    return !!process.env[key];
  }

  getString(key: ConfigurationKey): string | undefined {
    return process.env[key];
  }
}

export const configService = new ConfigService();
