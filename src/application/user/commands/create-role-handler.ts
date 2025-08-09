import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateRoleCommand } from '@application/user/commands/create-role-command';
import { RoleRepository } from '@/infrastructure/repositories/role-repository';

@CommandHandler(CreateRoleCommand)
export class CreateRoleHandler implements ICommandHandler<CreateRoleCommand> {
  private readonly roleRepository: RoleRepository;

  constructor(roleRepository: RoleRepository) {
    this.roleRepository = roleRepository;
  }

  async execute(command: CreateRoleCommand): Promise<void> {
    await this.roleRepository.create(command);
  }
}
