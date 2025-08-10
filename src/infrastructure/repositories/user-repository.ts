import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserRepositoryInterface } from '@domain/user/interfaces/repositories/user-repository-interface';
import { CreateUserInterface } from '@/domain/user/interfaces/create-user-interface';
import { User } from '@infrastructure/entities/user';

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
