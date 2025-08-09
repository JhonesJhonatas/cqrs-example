import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { RoleController } from '@api/controllers/role-controller';
import { UserController } from '@api/controllers/user-controller';

@Module({
  imports: [CqrsModule],
  controllers: [RoleController, UserController],
  providers: [],
})
export class ApiModule {}
