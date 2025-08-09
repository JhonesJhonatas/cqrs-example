import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ListRolesQuery } from '@application/user/querys/list-roles-query';
import { RoleRepository } from '@/infrastructure/repositories/role-repository';
import { RoleEntity } from '@/domain/user/entities/role-entity';

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
