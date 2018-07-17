import { ConfigService, configService } from './config.service';

export const configProviders = [
  {
    provide: ConfigService,
    useValue: configService,
  },
];
