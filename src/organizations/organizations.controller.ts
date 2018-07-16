import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Organization } from './interfaces/organization.interface';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  findAll(): Organization[] {
    return this.organizationsService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Organization | undefined {
    return this.organizationsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto) {
    return this.organizationsService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.organizationsService.delete(id);
  }
}
