import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from '@infrastructure/entities/user-schema';
import { RoleSchema } from '@infrastructure/entities/role-schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Role',
        schema: RoleSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Role',
        schema: RoleSchema,
      },
    ]),
  ],
})
export class DatabaseModule {}
