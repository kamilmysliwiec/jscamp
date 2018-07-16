import { organizations } from '@app/fixtures';
import { Injectable } from '@nestjs/common';
import { Organization } from './interfaces/organization.interface';

@Injectable()
export class OrganizationsService {
  private readonly organizations: Organization[] = organizations;

  findAll(): Organization[] {
    return this.organizations;
  }

  create(createOrganizationDto): Organization {
    this.organizations.push(createOrganizationDto);
    return this.organizations[this.organizations.length - 1];
  }

  findOne(id: string): Organization | undefined {
    return this.organizations.find(organization => organization.id === +id);
  }

  update(id: string, updateOrganizationDto): Organization {
    const organizationId = this.organizations.findIndex(
      item => item.id === +id,
    );
    this.organizations[organizationId] = updateOrganizationDto;
    return this.organizations[organizationId];
  }

  delete(id: string) {
    const organizationId = this.organizations.findIndex(
      item => item.id === +id,
    );
    this.organizations.splice(organizationId, 1);
  }
}
