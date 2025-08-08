import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UserModule } from '@application/user/user-module';
import { InfrastructureModule } from '@/infrastructure/infrastructure-module';

@Module({
  imports: [CqrsModule, InfrastructureModule, UserModule],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
