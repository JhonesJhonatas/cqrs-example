import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from '@application/user/commands/crate-user-command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand): Promise<void> {
    console.log('Creating user with details:', command);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
