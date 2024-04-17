import { IsUUID } from 'class-validator';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

import { DateBaseEntity } from '../shared/base/DateBase.entity';
import { IrDeviceType } from '../shared/enum/IrDeviceType';

@Entity('ir_device')
export class IrDeviceEntity extends DateBaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
  })
  nodeId: string;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  readerDeviceId: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  type: IrDeviceType;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  model: string;
}
