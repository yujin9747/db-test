import { IsUUID } from 'class-validator';
import {
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Entity,
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
  Column,
} from 'typeorm';

import { NodeEntity } from '../../Node.entity';
import { DateBaseEntity } from '../shared/base/DateBase.entity';
import { IrDeviceType } from '../shared/enum/IrDeviceType';

@Entity('ir_device')
export class IrDeviceEntity extends DateBaseEntity {
  @IsUUID(4, { message: 'id is not a valid uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn({ name: 'nodeId' })
  @ManyToOne(() => NodeEntity, {
    lazy: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  irBulb: NodeEntity;

  @JoinColumn({ name: 'readerDeviceId' })
  @OneToOne(() => NodeEntity, { lazy: true, nullable: true })
  readerDevice: NodeEntity;

  // @JoinColumn({ name: 'irTypeId' })
  // @ManyToOne(() => IrTypeModelEntity, { lazy: true, nullable: false })
  // type: IrTypeModelEntity;

  @Column({
    type: 'enum',
    enum: IrDeviceType,
  })
  type: IrDeviceType;

  @Column()
  model: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted ir_device with id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated ir_device with id ', this.id);
  }

  @BeforeRemove()
  logRemove() {
    console.log('Removed ir_device with id ', this.id);
  }
}
