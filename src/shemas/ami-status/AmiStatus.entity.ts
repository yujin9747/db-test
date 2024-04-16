import { IsUUID } from 'class-validator';
import {
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AmiMode } from './enum/AmiMode';
import { NodeEntity } from '../../Node.entity';
import { DateBaseEntity } from '../shared/base/DateBase.entity';
import { ChannelName } from './embedded-entity/ChannelName';
import { ChannelWatt } from './embedded-entity/ChannelWatt';
import { ChannelWattHour } from './embedded-entity/ChannelWattHour';

@Entity({ name: 'ami_status' })
export class AmiStatusEntity extends DateBaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn({ name: 'nodeId' })
  @OneToOne(() => NodeEntity, {
    onDelete: 'CASCADE',
  })
  ami: NodeEntity;

  @Column({
    type: 'enum',
    enum: AmiMode,
  })
  mode: AmiMode;

  @Column(() => ChannelName, { prefix: 'channelName1' })
  channelOneName: ChannelName;

  @Column(() => ChannelName, { prefix: 'channelName2' })
  channelTwoName: ChannelName;

  @Column(() => ChannelWatt, { prefix: 'watt1' })
  channelOneWatt: ChannelWatt;

  @Column(() => ChannelWatt, { prefix: 'watt2' })
  channelTwoWatt: ChannelWatt;

  @Column(() => ChannelWattHour, { prefix: 'wattHour1' })
  channelOneWattHour: ChannelWattHour;

  @Column(() => ChannelWattHour, { prefix: 'wattHour2' })
  channelTwoWattHour: ChannelWattHour;

  @AfterInsert()
  logInsert() {
    console.log('Inserted ami_status with id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated ami_status with id ', this.id);
  }

  @BeforeRemove()
  logRemove() {
    console.log('Removed ami_status with id ', this.id);
  }
}
