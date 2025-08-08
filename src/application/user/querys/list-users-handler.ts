import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ListUsersQuery } from '@application/user/querys/list-users-query';
import { UserEntity } from '@/domain/user/entities/user-entity';
import { UserRepository } from '@/infrastructure/repositories/user-repository';

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
