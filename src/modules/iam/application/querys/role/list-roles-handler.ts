import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ListRolesQuery } from '@iam/application/querys/role/list-roles-query';
import { RoleEntity } from '@iam/domain/entities/role-entity';
import { RoleRepository } from '@/modules/iam/infrastructure/repositories/role-repository';

@QueryHandler(ListRolesQuery)
export class ListRolesHandler implements IQueryHandler<ListRolesQuery> {
  private readonly roleRepository: RoleRepository;

  constructor(roleRepository: RoleRepository) {
    this.roleRepository = roleRepository;
  }

  async execute(query: ListRolesQuery): Promise<RoleEntity[]> {
    console.log(query);

    const roles: RoleEntity[] = await this.roleRepository.listRoles();

    return roles;
  }
}
