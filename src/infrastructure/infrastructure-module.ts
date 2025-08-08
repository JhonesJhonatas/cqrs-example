import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infrastructure/database/database-module';
import { UserRepository } from '@infrastructure/repositories/user-repository';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class InfrastructureModule {}
