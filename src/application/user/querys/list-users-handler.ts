import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ListUsersQuery } from '@application/user/querys/list-users-query';
import { UserEntity } from '@/domain/user/entities/user-entity';

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersQuery> {
  async execute(query: ListUsersQuery): Promise<void> {
    console.log(query);

    const fakeUser = new UserEntity(
      'user-id-123',
      'Jhones',
      'jhones@example.com',
      'password123',
      new Date(),
      new Date(),
    );

    console.log([fakeUser]);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
