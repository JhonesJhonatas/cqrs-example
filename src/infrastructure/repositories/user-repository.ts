import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { UserRepositoryInterface } from '@domain/user/interfaces/repositories/user-repository-interface';
import { CreateUserInterface } from '@/domain/user/interfaces/create-user-interface';
import { User } from '@infrastructure/entities/user-schema';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(props: CreateUserInterface): Promise<void> {
    const user = new this.userModel(props);
    await user.save();
  }
}
