import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

import { CreateRoleInterface } from '@/domain/user/interfaces/create-role-interface';
import { RoleRepositoryInterface } from '@/domain/user/interfaces/repositories/role-repository-interface';
import { Role } from '@infrastructure/entities/role';

@Injectable()
export class RoleRepository implements RoleRepositoryInterface {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(props: CreateRoleInterface): Promise<void> {
    const role = this.roleRepository.create(props);
    await this.roleRepository.save(role);
  }

  async listRoles(): Promise<Role[]> {
    return this.roleRepository.find();
  }
}
