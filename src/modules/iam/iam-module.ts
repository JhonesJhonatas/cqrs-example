import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './infrastructure/repositories/user-repository';
import { RoleRepository } from './infrastructure/repositories/role-repository';

import { UserProvider } from './infrastructure/database/user-provider';
import { RoleProvider } from './infrastructure/database/role-provider';
import { User } from './infrastructure/entities/user';
import { Role } from './infrastructure/entities/role';

// Handlers
import { CreateUserHandler } from './application/commands/user/create-user-handler';
import { CreateRoleHandler } from './application/commands/role/create-role-handler';
import { ListUsersHandler } from './application/querys/user/list-users-handler';
import { ListRolesHandler } from './application/querys/role/list-roles-handler';
import { UserController } from './api/controllers/user-controller';
import { RoleController } from './api/controllers/role-controller';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User, Role])],
  controllers: [UserController, RoleController],
  providers: [
    UserProvider,
    RoleProvider,
    UserRepository,
    RoleRepository,
    CreateUserHandler,
    CreateRoleHandler,
    ListUsersHandler,
    ListRolesHandler,
  ],
})
export class IamModule {}
