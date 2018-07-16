import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsController } from './organizations.controller';

describe('Organizations Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [OrganizationsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: OrganizationsController = module.get<OrganizationsController>(OrganizationsController);
    expect(controller).toBeDefined();
  });
});
