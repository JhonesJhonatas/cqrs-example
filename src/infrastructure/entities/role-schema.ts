import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { HydratedDocument } from 'mongoose';

import { RoleEntity } from '@/domain/user/entities/role-entity';

export type RoleDocument = HydratedDocument<RoleEntity>;

@Schema()
export class Role implements RoleEntity {
  @Prop({ required: true, default: randomUUID() })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  description: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
