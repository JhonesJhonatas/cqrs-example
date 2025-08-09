import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateUserCommand } from '@application/user/commands/create-user-command';
import { CreateUserHandler } from '@application/user/commands/create-user-handler';

import { ListUsersQuery } from '@application/user/querys/list-users-query';
import { ListUsersHandler } from '@application/user/querys/list-users-handler';

import { InfrastructureModule } from '@/infrastructure/infrastructure-module';

import { CreateRoleCommand } from '@application/user/commands/create-role-command';
import { CreateRoleHandler } from '@application/user/commands/create-role-handler';

import { ListRolesQuery } from '@application/user/querys/list-roles-query';
import { ListRolesHandler } from '@application/user/querys/list-roles-handler';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  controllers: [],
  providers: [
    CreateRoleCommand,
    CreateRoleHandler,
    ListRolesQuery,
    ListRolesHandler,
    CreateUserCommand,
    CreateUserHandler,
    ListUsersQuery,
    ListUsersHandler,
  ],
})
export class UserModule {}
