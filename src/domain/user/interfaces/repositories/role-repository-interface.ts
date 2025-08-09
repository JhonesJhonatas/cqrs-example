import { CreateRoleInterface } from '@domain/user/interfaces/create-role-interface';
import { RoleEntity } from '@domain/user/entities/role-entity';

export interface RoleRepositoryInterface {
  create(props: CreateRoleInterface): Promise<void>;
  listRoles(): Promise<RoleEntity[]>;
}
