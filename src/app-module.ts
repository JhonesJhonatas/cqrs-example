import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { IamModule } from '@iam/iam-module';
import { WorkspaceModule } from '@workspace/workspace-module';
import { DatabaseModule } from '@shared/infrastructure/database/database-module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, IamModule, WorkspaceModule],
  providers: [],
})
export class AppModule {}
