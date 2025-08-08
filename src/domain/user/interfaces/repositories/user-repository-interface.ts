import { CreateUserInterface } from '@domain/user/interfaces/create-user-interface';

export interface UserRepositoryInterface {
  create(props: CreateUserInterface): Promise<void>;
}
