import { Test, TestingModule } from '@nestjs/testing';
import { NoopLoggerService } from './noop-logger.service';

describe('NoopLoggerService', () => {
  let service: NoopLoggerService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoopLoggerService],
    }).compile();
    service = module.get<NoopLoggerService>(NoopLoggerService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
