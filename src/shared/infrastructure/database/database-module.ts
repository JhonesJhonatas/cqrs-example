import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppDataSource } from './typeorm-config';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options)],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
