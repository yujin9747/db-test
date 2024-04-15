import { IsUUID } from 'class-validator';
import {
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

import { NodeEntity } from '../Node.entity';
import { DateBaseEntity } from '../shared/base/DateBase.entity';
import { IrDeviceType } from '../shared/enum/IrDeviceType';

@Entity('ir_device')
export class IrDeviceEntity extends DateBaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn()
  id: string;

  @JoinColumn({ name: 'nodeId' })
  @ManyToOne(() => NodeEntity, { lazy: true })
  irBulb: NodeEntity;

  @JoinColumn({ name: 'readerDeviceId' })
  @OneToOne(() => NodeEntity, { lazy: true, nullable: true })
  readerDevice: NodeEntity;

  @JoinColumn({ name: 'irTypeId' })
  @ManyToOne(() => IrDeviceEntity, { lazy: true })
  type: IrDeviceType;
}
