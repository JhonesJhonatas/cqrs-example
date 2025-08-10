import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

import { User } from '../entities/user';

export const UserProvider = {
  provide: 'USER_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: [getDataSourceToken()],
};
