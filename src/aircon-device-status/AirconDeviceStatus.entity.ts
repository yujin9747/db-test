import { IsUUID } from 'class-validator';
import {
  BaseEntity,
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
import { NodeEntity } from '../Node.entity';
import { IrDeviceEntity } from '../ir-device/IrDevice.entity';

@Entity('aircon_device_status')
export class AirconDeviceStatusEntity extends BaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn()
  id: string;

  @JoinColumn({ name: 'readerDeviceId' })
  @OneToOne(() => NodeEntity)
  readerDevice: NodeEntity;

  @JoinColumn({ name: 'irDeviceId' })
  @OneToOne(() => IrDeviceEntity)
  irDevice: IrDeviceEntity;

  @Column(() => Temperature)
  temp: Temperature;

  // @Column({
  //   type: 'enum',
  //   enum: AirconMode,
  //   default: AirconMode.AUTO,
  // })
  // mode: AirconMode;

  // @Column({
  //   type: 'enum',
  //   enum: FanSpeed,
  //   default: FanSpeed.AUTO,
  // })
  // fanSpeed: FanSpeed;
  //
  // @Column({
  //   type: 'enum',
  //   enum: Power,
  //   default: Power.OFF,
  // })
  // power: Power;
}
