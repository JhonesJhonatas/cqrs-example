import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateUserCommand } from '@application/user/commands/crate-user-command';
import { CreateUserHandler } from '@application/user/commands/create-user-handler';

import { ListUsersQuery } from '@application/user/querys/list-users-query';
import { ListUsersHandler } from '@application/user/querys/list-users-handler';
import { InfrastructureModule } from '@/infrastructure/infrastructure-module';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  controllers: [],
  providers: [
    CreateUserCommand,
    CreateUserHandler,
    ListUsersQuery,
    ListUsersHandler,
  ],
})
export class UserModule {}
