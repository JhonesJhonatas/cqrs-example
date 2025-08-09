import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infrastructure/database/database-module';
import { UserRepository } from '@infrastructure/repositories/user-repository';
import { RoleRepository } from '@infrastructure/repositories/role-repository';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [UserRepository, RoleRepository],
  exports: [UserRepository, RoleRepository],
})
export class InfrastructureModule {}
