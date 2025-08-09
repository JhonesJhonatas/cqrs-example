import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { RoleRepositoryInterface } from '@/domain/user/interfaces/repositories/role-repository-interface';
import { Role } from '@infrastructure/entities/role-schema';
import { CreateRoleInterface } from '@/domain/user/interfaces/create-role-interface';

@Injectable()
export class RoleRepository implements RoleRepositoryInterface {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async create(props: CreateRoleInterface): Promise<void> {
    const role = new this.roleModel(props);
    await role.save();
  }

  async listRoles(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }
}
