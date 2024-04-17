import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IrDeviceType } from '../shared/enum/IrDeviceType';

@Entity('ir_type_model')
export class IrTypeModelEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
