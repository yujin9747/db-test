import { IsUUID } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Channel } from './embedded-entity/Channel';
import { AmiMode } from './enum/AmiMode';
import { NodeEntity } from '../Node.entity';
import { DateBaseEntity } from '../shared/base/DateBase.entity';

@Entity({ name: 'ami_status' })
export class AmiStatusEntity extends DateBaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'nodeId' })
  @OneToOne(() => NodeEntity)
  ami: NodeEntity;

  // @Column({
  //   type: 'enum',
  //   enum: AmiMode,
  //   default: AmiMode.MODE1,
  // })
  // mode: AmiMode;

  @Column(() => Channel)
  channel1: Channel;

  @Column(() => Channel)
  channel2: Channel;
}
