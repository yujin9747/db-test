import { IsUUID } from 'class-validator';
import {
  AfterInsert,
  AfterUpdate,
  BaseEntity,
  BeforeRemove,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Temperature } from './embedded-entity/Temperature';
import { AirconMode } from './enum/AirconMode';
import { FanSpeed } from './enum/FanSpeed';
import { Power } from './enum/Power';
import { IrDeviceEntity } from '../ir-device/IrDevice.entity';
import { NodeEntity } from '../../Node.entity';

@Entity('aircon_device_status')
export class AirconDeviceStatusEntity extends BaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn({ name: 'readerDeviceId' })
  @OneToOne(() => NodeEntity)
  readerDevice: NodeEntity;

  @JoinColumn({ name: 'irDeviceId' })
  @OneToOne(() => IrDeviceEntity)
  irDevice: IrDeviceEntity;

  @Column(() => Temperature, { prefix: false })
  temp: Temperature;

  @Column({
    type: 'enum',
    enum: AirconMode,
  })
  mode: AirconMode;

  @Column({
    type: 'enum',
    enum: FanSpeed,
  })
  fanSpeed: FanSpeed;

  @Column({
    type: 'enum',
    enum: Power,
  })
  power: Power;

  @AfterInsert()
  logInsert() {
    console.log('Inserted aircon_device_status with id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated aircon_device_status with id ', this.id);
  }

  @BeforeRemove()
  logRemove() {
    console.log('Removed aircon_device_status with id ', this.id);
  }
}
