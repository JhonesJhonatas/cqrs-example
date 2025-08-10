import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateUserDto } from '../dtos/user/create-user-dto';
import { CreateUserCommand } from '../../application/commands/user/create-user-command';
import { ListUsersQuery } from '../../application/querys/user/list-users-query';
import { User } from '../../infrastructure/entities/user';

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
