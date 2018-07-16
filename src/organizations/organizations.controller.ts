import { organizations } from '@app/fixtures';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Organization } from './interfaces/organization.interface';

@Controller('organizations')
export class OrganizationsController {
  private readonly organizations: Organization[] = organizations;

  @Get()
  findAll(): Organization[] {
    return this.organizations;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOrganizationDto): Organization {
    this.organizations.push(createOrganizationDto);
    return this.organizations[this.organizations.length - 1];
  }

  @Get(':id')
  findOne(@Param('id') id: string): Organization | undefined {
    return this.organizations.find(organization => organization.id === +id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto): Organization {
    const organizationId = this.organizations.findIndex(
      item => item.id === +id,
    );
    this.organizations[organizationId] = updateOrganizationDto;
    return this.organizations[organizationId];
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    const organizationId = this.organizations.findIndex(
      item => item.id === +id,
    );
    this.organizations.splice(organizationId, 1);
  }
}
