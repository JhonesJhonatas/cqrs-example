import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApiModule } from '@api/api-module';
import { ApplicationModule } from '@application/application-module';
import { InfrastructureModule } from '@infrastructure/infrastructure-module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApiModule,
    ApplicationModule,
    InfrastructureModule,
  ],
})
export class AppModule {}
