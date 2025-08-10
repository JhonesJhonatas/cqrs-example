import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

import { RoleRepositoryInterface } from '../../domain/interfaces/role/role-repository-interface';
import { Role } from '../entities/role';
import { CreateRoleInterface } from '../../domain/interfaces/role/create-role-interface';

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
