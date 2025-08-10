import { CreateRoleInterface } from '@iam/domain/interfaces/role/create-role-interface';
import { RoleEntity } from '@iam/domain/entities/role-entity';

export interface RoleRepositoryInterface {
  create(props: CreateRoleInterface): Promise<void>;
  listRoles(): Promise<RoleEntity[]>;
}
