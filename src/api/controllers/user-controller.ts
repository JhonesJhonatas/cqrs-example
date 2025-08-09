import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserCommand } from '@/application/user/commands/create-user-command';
import { ListUsersQuery } from '@/application/user/querys/list-users-query';
import { CreateUserDto } from '@api/dtos/create-user-dto';
import { User } from '@/infrastructure/entities/user-schema';

@Controller('user')
export class UserController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post('/create')
  async create(@Body() { name, email, password }: CreateUserDto) {
    const command = new CreateUserCommand(name, email, password);

    await this.commandBus.execute(command);
  }

  @Get('/list-users')
  async listUsers() {
    const users: User[] = await this.queryBus.execute(new ListUsersQuery());

    return users;
  }
}
