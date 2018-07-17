import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';

describe('Organizations Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [OrganizationsController],
      providers: [OrganizationsService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: OrganizationsController = module.get<OrganizationsController>(OrganizationsController);
    expect(controller).toBeDefined();
  });
});
