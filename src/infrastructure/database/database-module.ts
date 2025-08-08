import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from '@infrastructure/entities/user-schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:password@localhost:27017/cqrs_db?authSource=admin',
    ),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
