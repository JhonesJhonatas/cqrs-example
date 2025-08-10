import { CreateUserInterface } from '@iam/domain/interfaces/user/create-user-interface';
import { UserEntity } from '@iam/domain/entities/user-entity';

export interface UserRepositoryInterface {
  create(props: CreateUserInterface): Promise<void>;
  listUsers(): Promise<UserEntity[]>;
}
