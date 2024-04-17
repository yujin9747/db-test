import { IsUUID } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Temperature } from './embedded-entity/Temperature';
import { AirconMode } from './enum/AirconMode';
import { FanSpeed } from './enum/FanSpeed';
import { Power } from './enum/Power';

@Entity('aircon_device_status')
export class AirconDeviceStatusEntity extends BaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  readerDeviceId: string;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  irDeviceId: string;

  @Column(() => Temperature, { prefix: false })
  temperature: Temperature;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  mode: AirconMode;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  fanSpeed: FanSpeed;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  power: Power;
}
