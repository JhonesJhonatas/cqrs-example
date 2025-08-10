import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

import { Role } from '@iam/infrastructure/entities/role';

export const RoleProvider = {
  provide: 'ROLE_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Role),
  inject: [getDataSourceToken()],
};
