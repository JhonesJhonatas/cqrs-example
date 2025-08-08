import { CreateUserInterface } from '@domain/user/interfaces/create-user-interface';
import { UserEntity } from '@domain/user/entities/user-entity';

export interface UserRepositoryInterface {
  create(props: CreateUserInterface): Promise<void>;
  listUsers(): Promise<UserEntity[]>;
}
