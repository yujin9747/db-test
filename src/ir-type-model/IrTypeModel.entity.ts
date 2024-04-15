import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { IrDeviceType } from '../shared/enum/IrDeviceType';

@Entity('ir_type_model')
export class IrTypeModelEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'enum',
    enum: IrDeviceType,
    default: IrDeviceType.AIRCONDITIONER_CONTROLLER,
  })
  type: IrDeviceType;

  @Column()
  model: string;
}
