import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from '@application/user/commands/crate-user-command';
import { UserRepository } from '@/infrastructure/repositories/user-repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(command: CreateUserCommand): Promise<void> {
    await this.userRepository.create(command);
  }
}
