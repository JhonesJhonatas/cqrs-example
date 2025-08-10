import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserRepositoryInterface } from '../../domain/interfaces/user/user-repository-interface';
import { User } from '../entities/user';
import { CreateUserInterface } from '../../domain/interfaces/user/create-user-interface';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async create(props: CreateUserInterface): Promise<void> {
    const user = this.userRepository.create(props);
    await this.userRepository.save(user);
  }

  async listUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
