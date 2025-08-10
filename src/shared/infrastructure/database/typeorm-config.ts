import { DataSource } from 'typeorm';

import { Role } from '@/modules/iam/infrastructure/entities/role';
import { User } from '@/modules/iam/infrastructure/entities/user';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'cqrs-example-user',
  password: 'cqrs-example-pass',
  database: 'cqrs-example-db',
  synchronize: false,
  logging: true,
  entities: [User, Role],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
