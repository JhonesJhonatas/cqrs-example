import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateRoleDto } from '../dtos/role/create-role-dto';
import { CreateRoleCommand } from '../../application/commands/role/create-role-command';
import { ListRolesQuery } from '../../application/querys/role/list-roles-query';
import { Role } from '../../infrastructure/entities/role';

@Controller('role')
export class RoleController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post('/create')
  async create(@Body() { name, description }: CreateRoleDto) {
    const command = new CreateRoleCommand(name, description);

    await this.commandBus.execute(command);
  }

  @Get('/list-roles')
  async listRoles() {
    const roles: Role[] = await this.queryBus.execute(new ListRolesQuery());

    return roles;
  }
}
