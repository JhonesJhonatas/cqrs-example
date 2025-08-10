import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ListUsersQuery } from '@iam/application/querys/user/list-users-query';
import { UserEntity } from '@iam/domain/entities/user-entity';
import { UserRepository } from '@/modules/iam/infrastructure/repositories/user-repository';

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersQuery> {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(query: ListUsersQuery): Promise<UserEntity[]> {
    console.log(query);

    const users: UserEntity[] = await this.userRepository.listUsers();

    return users;
  }
}
