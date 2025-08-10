import { DataSource } from 'typeorm';

import { Role } from '@/modules/iam/infrastructure/entities/role';
import { User } from '@/modules/iam/infrastructure/entities/user';
import { envs } from '@/shared/contants/envs';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envs.PG_HOST,
  port: envs.PG_PORT,
  username: envs.PG_USER,
  password: envs.PG_PASS,
  database: envs.PG_NAME,
  synchronize: false,
  entities: [User, Role],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
