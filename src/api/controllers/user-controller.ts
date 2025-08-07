import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserCommand } from '@/application/user/commands/crate-user-command';
import { ListUsersQuery } from '@/application/user/querys/list-users-query';

@Controller('user')
export class UserController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post('/create')
  async create() {
    const command = new CreateUserCommand(
      'Jhones',
      'jhones@example.com',
      'password123',
    );

    await this.commandBus.execute(command);
  }

  @Get('/list-users')
  async listUsers() {
    const query = new ListUsersQuery();

    await this.queryBus.execute(query);
  }
}
