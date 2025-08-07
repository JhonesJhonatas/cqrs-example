import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UserController } from '@api/controllers/user-controller';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [],
})
export class ApiModule {}
